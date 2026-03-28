"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Marquee } from "@/components/ui/marquee"

gsap.registerPlugin(ScrollTrigger)

const CATEGORIES = [
  {
    title: "Languages",
    icon: "⚡",
    skills: [
      { name: "TypeScript / JavaScript", level: 92 },
      { name: "Go", level: 85 },
      { name: "Python", level: 88 },
      { name: "C / C++", level: 82 },
      { name: "Java", level: 80 },
    ],
  },
  {
    title: "Web & Backend",
    icon: "🛠",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "Node.js / Express", level: 85 },
      { name: "FastAPI / Django", level: 80 },
      { name: "PostgreSQL / MongoDB", level: 82 },
      { name: "REST / GraphQL", level: 84 },
    ],
  },
  {
    title: "Cloud, AI & Tools",
    icon: "☁️",
    skills: [
      { name: "AWS / GCP / Firebase", level: 80 },
      { name: "Docker / Linux", level: 83 },
      { name: "OpenCV / CUDA", level: 85 },
      { name: "TensorFlow / AI/ML", level: 82 },
      { name: "Git / CI/CD", level: 90 },
    ],
  },
]

const TECH_BADGES = [
  "Go", "TypeScript", "Python", "C++", "Java",
  "React", "Next.js", "Node.js", "FastAPI", "Express.js",
  "PostgreSQL", "MongoDB", "AWS", "GCP", "Docker",
  "OpenCV", "CUDA", "TensorFlow", "Distributed Systems", "Tailwind CSS",
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden py-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 100% 50%, rgba(6,182,212,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="mb-3 text-center text-sm font-medium tracking-widest text-cyan-400 uppercase">
          Skills
        </p>
        <h2 className="mb-16 text-center text-3xl font-bold text-white sm:text-4xl">
          My <span className="gradient-text">Tech Stack</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <CardSpotlight
              key={cat.title}
              className="skill-card flex flex-col gap-5"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-lg font-semibold text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>

      {/* Marquee tech badges */}
      <div className="relative mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#030712] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#030712] to-transparent" />
        <Marquee>
          {TECH_BADGES.map((name) => (
            <span
              key={name}
              className="inline-flex shrink-0 items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-slate-400"
            >
              {name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
