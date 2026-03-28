"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/components/ui/cn"

// Aceternity UI — TextGenerateEffect
// Animates words into view one-by-one, staggered.
export function TextGenerateEffect({
  words,
  className,
}: {
  words: string
  className?: string
}) {
  const [rendered, setRendered] = useState(false)
  const wordList = words.split(" ")

  useEffect(() => {
    setRendered(true)
  }, [])

  return (
    <p className={cn("font-bold", className)}>
      {wordList.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={rendered ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
          className="mr-[0.3em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </p>
  )
}
