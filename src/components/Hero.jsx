import React, { Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LazySpline = React.lazy(() => import('@splinetool/react-spline'))

const Hero = () => {
  const [isClient, setIsClient] = useState(false)
  const scrollToJourney = () => {
    const el = document.getElementById('journey')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    // Ensure we only attempt to render Spline on the client
    setIsClient(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0" aria-hidden>
        {/* Safe fallback background */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-slate-900 to-fuchsia-900" />
        {/* Spline (lazy, client-only, non-interactive) */}
        {isClient && (
          <Suspense fallback={null}>
            <div className="absolute inset-0 pointer-events-none">
              <LazySpline scene="https://prod.spline.design/Jd4wcqFfe70N-TXP/scene.splinecode" style={{ width: '100%', height: '100%', pointerEvents: 'none' }} />
            </div>
          </Suspense>
        )}
      </div>

      {/* Gradient and vignette overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-28 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs backdrop-blur"
        >
          <span className="uppercase tracking-widest">Pixel-Powered Focus</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.3)]"
        >
          Turn your Pomodoros into an 8‑bit adventure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 max-w-2xl text-lg sm:text-xl text-white/80"
        >
          Meet Pixeldoro: a playful RPG Pomodoro where every focus session earns XP, unlocks loot, and advances your quest.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={scrollToJourney}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-pink-500 text-white font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/40 transition"
          >
            Start your quest
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
          <a
            href="https://pixeldoro.io/"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/15 transition"
          >
            Visit the realm
          </a>
        </motion.div>

        {/* Floating hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="mt-10 text-white/70 text-sm"
        >
          Scroll to begin the journey ↓
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
