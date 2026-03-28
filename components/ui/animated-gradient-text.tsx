import { cn } from "@/components/ui/cn"

// Magic UI — AnimatedGradientText
// Badge / pill with animated gradient text. No client directive needed.
export function AnimatedGradientText({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-sm",
        className,
      )}
    >
      <span
        className="animate-gradient-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent"
      >
        {children}
      </span>
    </div>
  )
}
