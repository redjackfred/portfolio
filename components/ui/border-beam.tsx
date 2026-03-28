"use client"

import { cn } from "@/components/ui/cn"

interface BorderBeamProps {
  className?: string
  colorFrom?: string
  colorTo?: string
  duration?: number
}

// Magic UI — BorderBeam
// Animated rotating gradient border overlay.
// Wrap in a `relative overflow-hidden rounded-*` container.
export function BorderBeam({
  className,
  colorFrom = "#6366f1",
  colorTo = "#06b6d4",
  duration = 6,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className,
      )}
      style={
        {
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          padding: "1px",
          background: `conic-gradient(from var(--angle, 0deg), transparent 0%, var(--color-from) 30%, var(--color-to) 60%, transparent 70%)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          animation: `border-beam-spin ${duration}s linear infinite`,
        }}
      />
    </div>
  )
}
