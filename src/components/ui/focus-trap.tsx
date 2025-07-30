import * as React from "react"

interface FocusTrapProps {
  children: React.ReactNode
  active?: boolean
  restoreFocus?: boolean
  initialFocus?: React.RefObject<HTMLElement>
}

export function FocusTrap({
  children,
  active = true,
  restoreFocus = true,
  initialFocus
}: FocusTrapProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const previousActiveElement = React.useRef<HTMLElement | null>(null)

  // Get all focusable elements
  const getFocusableElements = React.useCallback(() => {
    if (!containerRef.current) return []
    
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ')

    return Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(focusableSelectors)
    ).filter(element => {
      return element.offsetWidth > 0 && 
             element.offsetHeight > 0 && 
             !element.hasAttribute('hidden')
    })
  }, [])

  React.useEffect(() => {
    if (!active) return

    // Store the currently focused element
    previousActiveElement.current = document.activeElement as HTMLElement

    // Set initial focus
    const focusableElements = getFocusableElements()
    if (initialFocus?.current) {
      initialFocus.current.focus()
    } else if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      const focusableElements = getFocusableElements()
      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      
      // Restore focus to the previously focused element
      if (restoreFocus && previousActiveElement.current) {
        previousActiveElement.current.focus()
      }
    }
  }, [active, getFocusableElements, initialFocus, restoreFocus])

  return (
    <div ref={containerRef}>
      {children}
    </div>
  )
}