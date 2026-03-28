"use client"

import { cn } from "@/components/ui/cn"

// Magic UI — ShimmerButton
// Button with a sweeping light shimmer on hover.
export function ShimmerButton({
  children,
  className,
  onClick,
  href,
  target,
  rel,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
}) {
  const base = cn(
    "group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-indigo-600/20 px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-600/30 hover:border-indigo-400/40",
    className,
  )

  const inner = (
    <>
      <span
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        aria-hidden="true"
      />
      {children}
    </>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={base}>
        {inner}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={base}>
      {inner}
    </button>
  )
}
