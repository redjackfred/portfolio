export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 sm:flex-row">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-slate-400">Pei-Wen Tang</span>. Built with
          Next.js &amp; love.
        </p>
        <p>
          Designed &amp; developed by{" "}
          <span className="text-slate-400">Pei-Wen Tang</span>.
        </p>
      </div>
    </footer>
  )
}
