import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const scenes = [
  {
    title: 'Cozy Pixel Camp',
    desc: 'Begin with 25 minutes. Brew a potion (tea counts), press start, and watch the camp come alive.',
    gradient: 'from-amber-400/30 to-rose-500/30',
  },
  {
    title: 'Forest of Deep Focus',
    desc: 'Silence notifications and traverse the trees. Each task completed reveals hidden creatures.',
    gradient: 'from-emerald-400/30 to-teal-500/30',
  },
  {
    title: 'Crystal Caverns',
    desc: 'Short breaks sparkle here. Stretch, hydrate, and collect crystals that power your next sprint.',
    gradient: 'from-sky-400/30 to-indigo-500/30',
  },
]

const Scenes = () => {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {scenes.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 overflow-hidden"
            >
              <div className={`absolute -inset-12 bg-gradient-to-br ${s.gradient} blur-3xl`} />
              <div className="relative">
                <div className="flex items-center gap-2 text-white/80">
                  <Sparkles size={18} />
                  <span className="uppercase tracking-wider text-xs">Scene {i + 1}</span>
                </div>
                <h3 className="mt-3 text-white font-bold text-xl">{s.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Scenes
