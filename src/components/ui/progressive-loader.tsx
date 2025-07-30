import * as React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ProgressiveLoaderProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  loadMore: () => Promise<T[]>
  hasMore: boolean
  loading?: boolean
  className?: string
  loadMoreText?: string
  loadingText?: string
  itemsPerPage?: number
  enableVirtualization?: boolean
  itemHeight?: number
}

export function ProgressiveLoader<T>({
  items,
  renderItem,
  loadMore,
  hasMore,
  loading = false,
  className,
  loadMoreText = "Load more",
  loadingText = "Loading...",
  itemsPerPage = 10,
  enableVirtualization = false,
  itemHeight = 100
}: ProgressiveLoaderProps<T>) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [visibleItems, setVisibleItems] = React.useState(itemsPerPage)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const observerRef = React.useRef<IntersectionObserver>()
  const loadMoreRef = React.useRef<HTMLButtonElement>(null)

  // Progressive disclosure - show more items without network request
  const displayedItems = React.useMemo(() => {
    return items.slice(0, visibleItems)
  }, [items, visibleItems])

  const handleLoadMore = async () => {
    if (isLoading) return

    // First, try to show more existing items
    if (visibleItems < items.length) {
      setVisibleItems(prev => Math.min(prev + itemsPerPage, items.length))
      return
    }

    // If no more existing items, load from network
    if (!hasMore) return

    setIsLoading(true)
    setError(null)

    try {
      await loadMore()
      setVisibleItems(prev => prev + itemsPerPage)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load more items')
    } finally {
      setIsLoading(false)
    }
  }

  // Intersection Observer for automatic loading
  React.useEffect(() => {
    if (!loadMoreRef.current) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !isLoading && (hasMore || visibleItems < items.length)) {
          handleLoadMore()
        }
      },
      { threshold: 0.1 }
    )

    observerRef.current.observe(loadMoreRef.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [isLoading, hasMore, visibleItems, items.length])

  // Announce loading state to screen readers
  const announceRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    if (announceRef.current) {
      announceRef.current.textContent = isLoading ? loadingText : ''
    }
  }, [isLoading, loadingText])

  const showLoadMoreButton = hasMore || visibleItems < items.length

  return (
    <div className={cn("space-y-4", className)} ref={containerRef}>
      {/* Screen reader announcements */}
      <div
        ref={announceRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />

      {/* Items list */}
      <div
        role="feed"
        aria-label="Content feed"
        className="space-y-4"
        style={enableVirtualization ? { height: displayedItems.length * itemHeight } : undefined}
      >
        {displayedItems.map((item, index) => (
          <article
            key={index}
            aria-posinset={index + 1}
            aria-setsize={items.length}
            className="focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 rounded-md"
          >
            {renderItem(item, index)}
          </article>
        ))}
      </div>

      {/* Error message */}
      {error && (
        <div
          role="alert"
          className="p-4 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md"
        >
          <p className="font-medium">Error loading content</p>
          <p>{error}</p>
          <Button
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={handleLoadMore}
          >
            Try again
          </Button>
        </div>
      )}

      {/* Load more button */}
      {showLoadMoreButton && (
        <div className="flex justify-center">
          <Button
            ref={loadMoreRef}
            variant="outline"
            onClick={handleLoadMore}
            disabled={isLoading || loading}
            className="min-w-[120px]"
            aria-describedby="load-more-description"
          >
            {isLoading || loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {loadingText}
              </>
            ) : (
              loadMoreText
            )}
          </Button>
        </div>
      )}

      {/* Hidden description for screen readers */}
      <div id="load-more-description" className="sr-only">
        {hasMore || visibleItems < items.length
          ? `Showing ${displayedItems.length} of ${items.length} items. Click to load more.`
          : `All ${items.length} items loaded.`
        }
      </div>

      {/* End of content indicator */}
      {!showLoadMoreButton && items.length > 0 && (
        <div className="text-center text-sm text-muted-foreground py-4">
          End of content
        </div>
      )}
    </div>
  )
}