"use client"

import { useRef } from "react"
import { motion } from "motion/react"
import { useInView } from "motion/react"
import { BorderBeam } from "@/components/ui/border-beam"
import { cn } from "@/components/ui/cn"

const PROJECTS = [
  {
    title: "Distributed Semantic Cache & Stateful Routing",
    description:
      "Polyglot system combining a Go API Gateway with Python FastAPI workers to eliminate redundant LLM calls. Consistent hashing (FNV-1a, 150 virtual nodes) pins same-context requests to the same worker; Redis Stack HNSW index catches semantically similar queries at cosine similarity ≥ 0.8. Achieves 7× latency reduction on cache hits (~25 ms vs ~180 ms).",
    tech: ["Go", "Python", "FastAPI", "Redis Stack", "Docker", "Vector Search"],
    href: "https://github.com/Peiwen-Tang/semantic-cache-router",
    repo: "https://github.com/Peiwen-Tang/semantic-cache-router",
    featured: false,
    gradient: "from-teal-600/10 to-emerald-600/10",
  },
  {
    title: "PTChat",
    description:
      "Self-hosted AI chat app with per-session provider switching across OpenAI, Anthropic Claude, Gemini, and local Ollama. Image RAG powered by GPT-4o-mini vision + PostgreSQL pgvector — photos and diagrams are semantically searchable like text. API keys live in the OS keyring, never plain text.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "TypeScript", "SSE"],
    href: "https://github.com/redjackfred/ptchat",
    repo: "https://github.com/redjackfred/ptchat",
    featured: false,
    gradient: "from-sky-600/10 to-indigo-600/10",
  },
  {
    title: "Distributed File System",
    description:
      "A fault-tolerant DFS with separate control and data planes. Uses custom TCP Length-Prefixed Framing, Protocol Buffers, and Go Goroutines for parallel chunk retrieval. Features Consistent Hashing, heartbeat-based failure detection, Read Repair, and Pipeline Replication with tunable consistency.",
    tech: ["Go", "Docker", "Protocol Buffers", "Distributed Systems"],
    href: "https://github.com/redjackfred",
    repo: "https://github.com/redjackfred",
    featured: true,
    gradient: "from-indigo-600/10 to-violet-600/10",
  },
  {
    title: "AI-Powered Image Analytics",
    description:
      "RESTful API for real-time image processing powered by FastAPI and OpenCV. Deployed on AWS with NoSQL-backed metadata storage. Supports async batch processing and exposes a clean JSON API surface.",
    tech: ["FastAPI", "Python", "OpenCV", "AWS", "NoSQL"],
    href: "https://github.com/redjackfred",
    repo: "https://github.com/redjackfred",
    featured: false,
    gradient: "from-cyan-600/10 to-blue-600/10",
  },
  {
    title: "Home Haven Web App",
    description:
      "Led development of a real-estate matching platform as team lead. Integrated Google Maps API for location search, managed a PostgreSQL schema, and built the full UI in Next.js + Tailwind CSS. Coordinated sprint planning via Jira and Figma.",
    tech: ["Next.js", "React", "PostgreSQL", "Tailwind CSS", "Google APIs"],
    href: "https://github.com/redjackfred",
    repo: "https://github.com/redjackfred",
    featured: false,
    gradient: "from-violet-600/10 to-pink-600/10",
  },
  {
    title: "Defect Detection Module @ Foxlink",
    description:
      "Production CV module achieving 96.7% accuracy for multi-scale defect detection (dust, scratches, abrasion). Integrated AI with traditional image processing to push accuracy from 87% → 99.5% for industrial quality inspection lines.",
    tech: ["TensorFlow", "Python", "OpenCV", "C++", "CUDA"],
    href: "https://github.com/redjackfred",
    repo: "https://github.com/redjackfred",
    featured: false,
    gradient: "from-emerald-600/10 to-cyan-600/10",
  },
  {
    title: "Robot Bin-Picking System",
    description:
      "Master's thesis project — a Structured Light-based automatic random bin-picking system integrating a 6-DOF robot arm with 3D point-cloud image processing for pose estimation and collision-free grasping. Scored 90/100.",
    tech: ["C++", "OpenCV", "Robot Arm", "3D Vision", "Structured Light"],
    href: "https://github.com/redjackfred",
    repo: "https://github.com/redjackfred",
    featured: false,
    gradient: "from-amber-600/10 to-orange-600/10",
  },
  {
    title: "Multiplayer Web Game",
    description:
      "Full-stack multiplayer game built during MS coursework using Java Spring Boot as the game server, a React frontend, and real-time communication over Google Cloud Platform. Applied object-oriented design patterns throughout.",
    tech: ["Java", "Spring Boot", "React", "GCP", "JavaScript"],
    href: "https://github.com/redjackfred",
    repo: "https://github.com/redjackfred",
    featured: false,
    gradient: "from-rose-600/10 to-pink-600/10",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.08] p-6 transition-colors duration-300 hover:border-white/[0.14]",
        `bg-gradient-to-br ${project.gradient}`,
        project.featured && "md:col-span-2",
      )}
    >
      <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <BorderBeam />
      </div>

      <div className="relative z-10">
        {project.featured && (
          <span className="mb-4 inline-block rounded-full border border-indigo-500/20 bg-indigo-600/20 px-3 py-0.5 text-xs font-medium text-indigo-300">
            Featured
          </span>
        )}

        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-400 transition-colors hover:text-indigo-300"
          >
            View ↗
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 transition-colors hover:text-slate-300"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 0% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="mb-3 text-center text-sm font-medium tracking-widest text-indigo-400 uppercase">
          Work
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
          Selected <span className="gradient-text">Projects</span>
        </h2>
        <p className="mb-16 text-center text-slate-500">
          From distributed systems to AI/CV pipelines and full-stack web apps.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/redjackfred"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            See more on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
