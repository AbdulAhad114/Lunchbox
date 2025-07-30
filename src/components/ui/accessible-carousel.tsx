import * as React from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface AccessibleCarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showIndicators?: boolean
  className?: string
  ariaLabel?: string
}

export function AccessibleCarousel({
  children,
  autoPlay = false,
  autoPlayInterval = 5000,
  showIndicators = true,
  className,
  ariaLabel = "Image carousel"
}: AccessibleCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(autoPlay)
  const [reducedMotion, setReducedMotion] = React.useState(false)
  const intervalRef = React.useRef<NodeJS.Timeout>()
  const carouselRef = React.useRef<HTMLDivElement>(null)

  // Check for reduced motion preference
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Auto-play functionality
  React.useEffect(() => {
    if (isPlaying && !reducedMotion && children.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % children.length)
      }, autoPlayInterval)
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, reducedMotion, children.length, autoPlayInterval])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
    setIsPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
    setIsPlaying(false)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault()
        goToPrevious()
        break
      case 'ArrowRight':
        event.preventDefault()
        goToNext()
        break
      case 'Home':
        event.preventDefault()
        goToSlide(0)
        break
      case 'End':
        event.preventDefault()
        goToSlide(children.length - 1)
        break
      case ' ':
        event.preventDefault()
        togglePlayPause()
        break
    }
  }

  if (children.length === 0) return null

  return (
    <div className={cn("relative", className)}>
      {/* Skip link for screen readers */}
      <a
        href="#carousel-end"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-primary-foreground px-4 py-2 z-50"
      >
        Skip carousel
      </a>

      <div
        ref={carouselRef}
        className="relative overflow-hidden rounded-lg"
        role="region"
        aria-label={ariaLabel}
        aria-live={isPlaying ? "off" : "polite"}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionDuration: reducedMotion ? '0ms' : '300ms'
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${children.length}`}
              aria-hidden={index !== currentIndex}
            >
              {child}
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        {children.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={goToPrevious}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={goToNext}
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Play/Pause button */}
        {autoPlay && children.length > 1 && (
          <Button
            variant="outline"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        )}
      </div>

      {/* Indicators */}
      {showIndicators && children.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2" role="tablist" aria-label="Carousel slides">
          {children.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                index === currentIndex
                  ? "bg-primary"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}

      <div id="carousel-end" />
    </div>
  )
}