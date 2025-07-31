import * as React from "react"
import { CaretDown } from "phosphor-react"

interface AccordionContextType {
  openItems: Set<string>
  toggleItem: (value: string) => void
  type: "single" | "multiple"
}

interface AccordionItemContextType {
  value: string
  isOpen: boolean
}

const AccordionContext = React.createContext<AccordionContextType>({
  openItems: new Set(),
  toggleItem: () => {},
  type: "single"
})

const AccordionItemContext = React.createContext<AccordionItemContextType>({
  value: "",
  isOpen: false
})

interface AccordionProps {
  type: "single" | "multiple"
  collapsible?: boolean
  className?: string
  children: React.ReactNode
}

export function Accordion({ type, collapsible = false, className, children }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set())

  const toggleItem = React.useCallback((value: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(value)) {
        newSet.delete(value)
      } else {
        if (type === "single") {
          newSet.clear()
        }
        newSet.add(value)
      }
      return newSet
    })
  }, [type])

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={className}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  value: string
  className?: string
  children: React.ReactNode
}

export function AccordionItem({ value, className, children }: AccordionItemProps) {
  const { openItems } = React.useContext(AccordionContext)
  const isOpen = openItems.has(value)

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={className}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

interface AccordionTriggerProps {
  className?: string
  children: React.ReactNode
}

export function AccordionTrigger({ className, children }: AccordionTriggerProps) {
  const { toggleItem } = React.useContext(AccordionContext)
  const { value, isOpen } = React.useContext(AccordionItemContext)

  return (
    <button
      type="button"
      className={`flex flex-1 items-center justify-between w-full text-left ${className || ''}`}
      onClick={() => toggleItem(value)}
    >
      {children}
      <CaretDown 
        size={16} 
        color="currentColor" 
        className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
  )
}

interface AccordionContentProps {
  className?: string
  children: React.ReactNode
}

export function AccordionContent({ className, children }: AccordionContentProps) {
  const { isOpen } = React.useContext(AccordionItemContext)

  if (!isOpen) return null

  return (
    <div className={`overflow-hidden text-sm transition-all ${className || ''}`}>
      <div className="pb-4 pt-0">{children}</div>
    </div>
  )
}