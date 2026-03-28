"use client"

import { motion } from "motion/react"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Spotlight } from "@/components/ui/spotlight"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#6366f1"
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030712] to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <AnimatedGradientText className="mb-6">
            ✦ Open to new opportunities
          </AnimatedGradientText>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Pei-Wen Tang</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 text-xl font-medium text-slate-300 sm:text-2xl"
        >
          Software Engineer &amp; AI Specialist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          MS Computer Science @ USF. I build scalable full-stack systems and
          AI-powered applications — from distributed infrastructure in Go to
          computer-vision pipelines and modern React interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <ShimmerButton
            href="#projects"
            className="border-indigo-500/50 bg-indigo-600/30 px-7 hover:bg-indigo-600/50"
          >
            View Projects
          </ShimmerButton>
          <ShimmerButton
            href="#contact"
            className="border-white/10 bg-white/5 px-7 hover:bg-white/10"
          >
            Get in Touch
          </ShimmerButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-slate-500">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-6 w-0.5 rounded-full bg-gradient-to-b from-indigo-500 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
