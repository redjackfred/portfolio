"use client"

import dynamic from "next/dynamic"

// Dynamic import with ssr:false must live in a Client Component
const ParticleCanvas = dynamic(() => import("./ParticleCanvas"), { ssr: false })

export default function ParticleCanvasClient() {
  return <ParticleCanvas />
}
