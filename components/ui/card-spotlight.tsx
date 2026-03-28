"use client"

import { useRef, useState } from "react"
import { cn } from "@/components/ui/cn"

// Aceternity UI — CardSpotlight
// A card that shows a radial-gradient spotlight following the cursor
export function CardSpotlight({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.15]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.12), transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}
