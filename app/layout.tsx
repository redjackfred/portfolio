import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pei-Wen Tang — Software Engineer & AI Specialist",
  description:
    "Portfolio of Pei-Wen Tang — Software Engineer and AI Specialist with expertise in Go, Python, React, distributed systems, and computer vision.",
  keywords: [
    "software engineer",
    "AI",
    "computer vision",
    "Go",
    "React",
    "TypeScript",
    "distributed systems",
    "portfolio",
  ],
  authors: [{ name: "Pei-Wen Tang" }],
  openGraph: {
    title: "Pei-Wen Tang — Software Engineer & AI Specialist",
    description:
      "Building scalable full-stack systems and AI-powered applications — from distributed infrastructure to computer-vision pipelines.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pei-Wen Tang — Software Engineer & AI Specialist",
    description:
      "Software Engineer & AI Specialist | MS CS @ USF | Go · Python · React · OpenCV",
  },
}

export const viewport: Viewport = {
  themeColor: "#030712",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
