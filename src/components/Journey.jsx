import React from 'react'
import { motion } from 'framer-motion'
import { Swords, Mountain, Crown, Backpack, Map, Sparkles } from 'lucide-react'

const steps = [
  {
    id: 'camp',
    icon: Backpack,
    title: 'Set up Camp',
    text: 'Choose your quest and time your first Pomodoro. Light the campfire; focus begins here.',
    color: 'from-amber-400 to-pink-500',
  },
  {
    id: 'trail',
    icon: Map,
    title: 'The Pixel Trail',
    text: 'Each session moves you across the map. Defeat distractions to earn XP and coins.',
    color: 'from-sky-400 to-violet-500',
  },
  {
    id: 'battle',
    icon: Swords,
    title: 'Boss Battles',
    text: 'Big tasks spawn bosses. Chain focus streaks to unleash special moves and loot.',
    color: 'from-rose-500 to-orange-500',
  },
  {
    id: 'summit',
    icon: Mountain,
    title: 'Reach the Summit',
    text: 'Complete arcs, unlock biomes, and decorate your base with trophies and pets.',
    color: 'from-emerald-400 to-teal-500',
  },
]

const Journey = () => {
  return (
    <section id="journey" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-extrabold text-white text-center"
        >
          Your Pomodoro Questline
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-center text-white/70 max-w-2xl mx-auto"
        >
          Follow the path from humble beginnings to legendary focus. Each milestone mirrors your real progress.
        </motion.p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur overflow-hidden"
              >
                <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${s.color} opacity-20 blur-2xl`} />
                <div className="relative flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-white font-bold text-lg">{s.title}</h3>
                </div>
                <p className="relative mt-3 text-white/70 text-sm">{s.text}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 mx-auto max-w-3xl text-center text-white/80"
        >
          Forge your routine. Level up your day. The final gate awaits ahead.
        </motion.div>
      </div>
    </section>
  )
}

export default Journey
