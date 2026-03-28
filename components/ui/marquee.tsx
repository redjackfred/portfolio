import { cn } from "@/components/ui/cn"

// Magic UI — Marquee
// Infinite horizontal scroll ticker. Duplicate children are rendered
// so the loop is seamless. Uses CSS `animate-marquee`.
export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
}: {
  children: React.ReactNode
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:2rem]",
        className,
      )}
    >
      {[0, 1].map((key) => (
        <div
          key={key}
          className={cn(
            "flex min-w-full shrink-0 items-center gap-[--gap] py-2",
            "animate-marquee",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          aria-hidden={key === 1}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
