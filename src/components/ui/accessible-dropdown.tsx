import * as React from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface DropdownOption {
  value: string
  label: string
  disabled?: boolean
}

interface AccessibleDropdownProps {
  options: DropdownOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  required?: boolean
  name?: string
  id?: string
  'aria-label'?: string
  'aria-describedby'?: string
}

export function AccessibleDropdown({
  options,
  value,
  onValueChange,
  placeholder = "Select an option",
  className,
  disabled = false,
  required = false,
  name,
  id,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy
}: AccessibleDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [focusedIndex, setFocusedIndex] = React.useState(-1)
  const [searchTerm, setSearchTerm] = React.useState("")
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const listRef = React.useRef<HTMLUListElement>(null)
  const searchTimeoutRef = React.useRef<NodeJS.Timeout>()

  const filteredOptions = React.useMemo(() => {
    if (!searchTerm) return options
    return options.filter(option =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [options, searchTerm])

  const selectedOption = options.find(option => option.value === value)

  const handleToggle = () => {
    if (disabled) return
    setIsOpen(!isOpen)
    if (!isOpen) {
      setFocusedIndex(value ? filteredOptions.findIndex(opt => opt.value === value) : 0)
    }
  }

  const handleSelect = (optionValue: string) => {
    onValueChange?.(optionValue)
    setIsOpen(false)
    setSearchTerm("")
    buttonRef.current?.focus()
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        if (isOpen && focusedIndex >= 0) {
          const option = filteredOptions[focusedIndex]
          if (option && !option.disabled) {
            handleSelect(option.value)
          }
        } else {
          handleToggle()
        }
        break
      case 'Escape':
        event.preventDefault()
        setIsOpen(false)
        setSearchTerm("")
        buttonRef.current?.focus()
        break
      case 'ArrowDown':
        event.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
          setFocusedIndex(0)
        } else {
          setFocusedIndex(prev => {
            const nextIndex = prev < filteredOptions.length - 1 ? prev + 1 : 0
            return nextIndex
          })
        }
        break
      case 'ArrowUp':
        event.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
          setFocusedIndex(filteredOptions.length - 1)
        } else {
          setFocusedIndex(prev => {
            const nextIndex = prev > 0 ? prev - 1 : filteredOptions.length - 1
            return nextIndex
          })
        }
        break
      case 'Home':
        if (isOpen) {
          event.preventDefault()
          setFocusedIndex(0)
        }
        break
      case 'End':
        if (isOpen) {
          event.preventDefault()
          setFocusedIndex(filteredOptions.length - 1)
        }
        break
      default:
        // Type-ahead search
        if (event.key.length === 1 && isOpen) {
          setSearchTerm(prev => prev + event.key)
          if (searchTimeoutRef.current) {
            clearTimeout(searchTimeoutRef.current)
          }
          searchTimeoutRef.current = setTimeout(() => {
            setSearchTerm("")
          }, 1000)
        }
        break
    }
  }

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchTerm("")
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Scroll focused option into view
  React.useEffect(() => {
    if (isOpen && focusedIndex >= 0 && listRef.current) {
      const focusedElement = listRef.current.children[focusedIndex] as HTMLElement
      if (focusedElement) {
        focusedElement.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [focusedIndex, isOpen])

  return (
    <div className={cn("relative", className)}>
      <button
        ref={buttonRef}
        type="button"
        id={id}
        name={name}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-required={required}
        disabled={disabled}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "[&>span]:line-clamp-1"
        )}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
      >
        <span className={cn(selectedOption ? "text-foreground" : "text-muted-foreground")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={cn("h-4 w-4 opacity-50 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-md border bg-popover shadow-md">
          <ul
            ref={listRef}
            role="listbox"
            aria-label={ariaLabel || "Options"}
            className="py-1"
          >
            {filteredOptions.length === 0 ? (
              <li className="px-3 py-2 text-sm text-muted-foreground">No options found</li>
            ) : (
              filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={option.value === value}
                  aria-disabled={option.disabled}
                  className={cn(
                    "relative flex cursor-pointer select-none items-center px-3 py-2 text-sm outline-none",
                    "hover:bg-accent hover:text-accent-foreground",
                    "focus:bg-accent focus:text-accent-foreground",
                    index === focusedIndex && "bg-accent text-accent-foreground",
                    option.disabled && "pointer-events-none opacity-50"
                  )}
                  onClick={() => !option.disabled && handleSelect(option.value)}
                >
                  <span className="flex-1">{option.label}</span>
                  {option.value === value && (
                    <Check className="h-4 w-4 ml-2" />
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  )
}