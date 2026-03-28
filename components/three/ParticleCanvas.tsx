"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

// Raw Three.js particle field rendered into a fixed background canvas.
// Particles slowly drift and respond to mouse movement.
export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    )
    camera.position.z = 6

    // ── Particles ──────────────────────────────────────────────────
    const COUNT = 2500
    const positions = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)

    const colorA = new THREE.Color("#6366f1") // indigo
    const colorB = new THREE.Color("#06b6d4") // cyan

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 18
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18

      const t = Math.random()
      const c = colorA.clone().lerp(colorB, t)
      colors[i * 3 + 0] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const mat = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    })

    const particles = new THREE.Points(geo, mat)
    scene.add(particles)

    // ── Mouse parallax ─────────────────────────────────────────────
    const mouse = { x: 0, y: 0 }
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener("mousemove", handleMouseMove)

    // ── Resize ─────────────────────────────────────────────────────
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    // ── Animation loop ─────────────────────────────────────────────
    let rafId: number
    const clock = new THREE.Clock()

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      particles.rotation.y = elapsed * 0.04 + mouse.x * 0.05
      particles.rotation.x = elapsed * 0.015 + mouse.y * 0.03

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      geo.dispose()
      mat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 h-full w-full"
      style={{ zIndex: 0 }}
    />
  )
}
