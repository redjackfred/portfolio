"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextGenerateEffect } from "@/components/ui/text-generate";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "5+", label: "Happy Clients" },
  { value: "∞", label: "Cups of Coffee" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column slides in from left
      gsap.from(leftRef.current, {
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Right column slides in from right
      gsap.from(rightRef.current, {
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Stats stagger from bottom
      gsap.from(".stat-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative mx-auto max-w-6xl px-6 py-28"
    >
      {/* Section label */}
      <p className="mb-3 text-center text-sm font-medium tracking-widest text-indigo-400 uppercase">
        About Me
      </p>

      <div className="grid gap-16 md:grid-cols-2 md:gap-20">
        {/* Left — text */}
        <div ref={leftRef}>
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Building things people
            <br />
            <span className="gradient-text">love to use</span>
          </h2>

          <div className="space-y-4 text-base leading-relaxed text-slate-400">
            <p>
              I&apos;m a full-stack developer with a passion for crafting
              seamless digital experiences. My journey started with curiosity
              about how things work on the internet and grew into a career
              building them.
            </p>
            <p>
              I specialize in React and TypeScript on the frontend, with GO,
              Python, Java, C++, and cloud-native services on the backend. I
              care deeply about performance, accessibility, and the tiny details
              that separate good software from great software.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m exploring the world, hiking,
              playing basketball or learning new technologies that draw my
              attention.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Next.js",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "GCP",
              "Go",
              "Python",
              "Java",
              "C++",
              "OpenCV",
              "AI",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-indigo-500/20 bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right — avatar + decorative */}
        <div ref={rightRef} className="flex items-center justify-center">
          <div className="relative">
            {/* Placeholder avatar circle */}
            <div className="animate-float relative h-64 w-64 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-cyan-600/10">
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                <Image
                  src="/picture.jpeg"
                  alt="Avatar"
                  width={512}
                  height={512}
                />
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 -z-10 rounded-3xl border border-indigo-500/10" />
            <div className="absolute -inset-8 -z-20 rounded-3xl border border-cyan-500/5" />
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div
        ref={statsRef}
        className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4"
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            className="stat-item rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 text-center backdrop-blur-sm"
          >
            <p className="text-3xl font-bold gradient-text">{s.value}</p>
            <p className="mt-1 text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
