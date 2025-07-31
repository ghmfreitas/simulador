"use client"

import * as React from "react"
import * as ReactDOM from "react-dom"

interface TooltipProps {
  children: React.ReactNode
  content: string
  className?: string
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export function Tooltip({ children, content, className, side = 'top' }: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const [position, setPosition] = React.useState({ top: 0, left: 0 })
  const triggerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

      let top = rect.top + scrollTop
      let left = rect.left + scrollLeft

      switch (side) {
        case 'right':
          left += rect.width
          top += rect.height / 2
          break
        case 'bottom':
          top += rect.height
          left += rect.width / 2
          break
        case 'left':
          top += rect.height / 2
          break
        case 'top':
        default:
          left += rect.width / 2
          break
      }

      setPosition({ top, left })
    }
  }, [isVisible, side])

  const getTooltipClasses = () => {
    switch (side) {
      case 'right':
        return "fixed z-[9999] px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg whitespace-nowrap ml-2 transform -translate-y-1/2 before:content-[''] before:absolute before:right-full before:top-1/2 before:transform before:-translate-y-1/2 before:border-4 before:border-transparent before:border-r-gray-900"
      case 'bottom':
        return "fixed z-[9999] px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg whitespace-nowrap mt-2 transform -translate-x-1/2 before:content-[''] before:absolute before:bottom-full before:left-1/2 before:transform before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-gray-900"
      case 'left':
        return "fixed z-[9999] px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg whitespace-nowrap mr-2 transform -translate-x-full -translate-y-1/2 before:content-[''] before:absolute before:left-full before:top-1/2 before:transform before:-translate-y-1/2 before:border-4 before:border-transparent before:border-l-gray-900"
      case 'top':
      default:
        return "fixed z-[9999] px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg whitespace-nowrap -mt-10 transform -translate-x-1/2 before:content-[''] before:absolute before:top-full before:left-1/2 before:transform before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-gray-900"
    }
  }

  const tooltipContent = isVisible && (
    <div 
      className={getTooltipClasses()}
      style={{
        top: position.top + 'px',
        left: position.left + 'px'
      }}
    >
      {content}
    </div>
  )

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
      </div>
      {typeof window !== 'undefined' && tooltipContent && ReactDOM.createPortal(
        tooltipContent,
        document.body
      )}
    </div>
  )
}