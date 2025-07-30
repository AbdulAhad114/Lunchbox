import * as React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveGridProps {
  children: React.ReactNode
  className?: string
  minItemWidth?: string
  gap?: string
  autoFit?: boolean
}

export function ResponsiveGrid({
  children,
  className,
  minItemWidth = "280px",
  gap = "1rem",
  autoFit = true
}: ResponsiveGridProps) {
  return (
    <div
      className={cn("grid w-full", className)}
      style={{
        gridTemplateColumns: autoFit 
          ? `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`
          : `repeat(auto-fill, minmax(${minItemWidth}, 1fr))`,
        gap
      }}
    >
      {children}
    </div>
  )
}

interface ResponsiveStackProps {
  children: React.ReactNode
  className?: string
  breakpoint?: string
  stackDirection?: "horizontal" | "vertical"
  gap?: string
  alignItems?: "start" | "center" | "end" | "stretch"
  justifyContent?: "start" | "center" | "end" | "between" | "around" | "evenly"
}

export function ResponsiveStack({
  children,
  className,
  breakpoint = "768px",
  stackDirection = "vertical",
  gap = "1rem",
  alignItems = "stretch",
  justifyContent = "start"
}: ResponsiveStackProps) {
  const alignItemsMap = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    stretch: "stretch"
  }

  const justifyContentMap = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly"
  }

  return (
    <div
      className={cn("flex", className)}
      style={{
        flexDirection: stackDirection === "horizontal" ? "row" : "column",
        gap,
        alignItems: alignItemsMap[alignItems],
        justifyContent: justifyContentMap[justifyContent],
        [`@media (max-width: ${breakpoint})`]: {
          flexDirection: "column"
        }
      }}
    >
      {children}
    </div>
  )
}