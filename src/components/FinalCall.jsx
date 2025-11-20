import React from 'react'
import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'

const FinalCall = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-slate-950 via-indigo-950 to-fuchsia-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)] opacity-60" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs backdrop-blur"
        >
          <Crown size={16} />
          <span>Final Gate</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-5xl font-extrabold text-white"
        >
          Claim your reward and continue the journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-4 text-white/80 max-w-2xl mx-auto"
        >
          The adventure truly begins inside the app. Bring your party, track your streaks, and build your pixel empire.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://pixeldoro.io/"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 rounded-xl bg-pink-500 text-white font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/40 transition"
          >
            Download Pixeldoro
          </a>
          <a
            href="#journey"
            className="px-7 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/15 transition"
          >
            Revisit the path
          </a>
        </motion.div>

        <p className="mt-6 text-xs text-white/60">Not affiliated — fan landing inspired by the original.</p>
      </div>
    </section>
  )
}

export default FinalCall
