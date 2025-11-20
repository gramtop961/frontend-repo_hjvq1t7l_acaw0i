import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swords, Shield, Wand2, Play, Pause, RotateCcw, ChevronDown } from 'lucide-react'

const classes = [
  { id: 'warrior', name: 'Warrior', icon: Swords, color: 'from-rose-500 to-orange-500' },
  { id: 'guardian', name: 'Guardian', icon: Shield, color: 'from-emerald-500 to-teal-500' },
  { id: 'mage', name: 'Mage', icon: Wand2, color: 'from-sky-500 to-indigo-500' },
]

const formatTime = (s) => {
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}

const Demo = () => {
  const [selected, setSelected] = useState(classes[0])
  const [isRunning, setIsRunning] = useState(false)
  const [demoMode, setDemoMode] = useState(true) // 10s demo vs 25m
  const total = demoMode ? 10 : 25 * 60
  const [seconds, setSeconds] = useState(total)
  const [xp, setXp] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    setSeconds(total)
  }, [total])

  useEffect(() => {
    if (!isRunning) return
    intervalRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(intervalRef.current)
          setIsRunning(false)
          setXp((x) => Math.min(100, x + (demoMode ? 20 : 5)))
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [isRunning, demoMode])

  const progress = useMemo(() => {
    return Math.round(((total - seconds) / total) * 100)
  }, [seconds, total])

  const toggleRun = () => setIsRunning((r) => !r)
  const reset = () => {
    setIsRunning(false)
    setSeconds(total)
  }

  return (
    <section className="relative py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 overflow-hidden"
        >
          <div className={`absolute -top-28 -right-28 w-64 h-64 rounded-full bg-gradient-to-br ${selected.color} opacity-20 blur-3xl`} />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Class selector */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                <selected.icon size={22} />
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider">Choose your class</p>
                <div className="relative mt-1">
                  <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white/90">
                    {selected.name}
                    <ChevronDown size={16} />
                  </button>
                  <div className="sr-only">selector is decorative in demo</div>
                </div>
              </div>
            </div>

            {/* Timer */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-black/30 border border-white/10 p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white/70 text-sm">Focus timer</p>
                  <button onClick={() => setDemoMode((d) => !d)} className="text-xs px-2 py-1 rounded bg-white/10 text-white border border-white/10">
                    {demoMode ? 'Demo 10s' : '25:00'}
                  </button>
                </div>
                <div className="text-white font-extrabold text-4xl tabular-nums">{formatTime(seconds)}</div>
                <div className="mt-3 flex items-center gap-2">
                  <button onClick={toggleRun} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-pink-500 text-white font-semibold shadow-lg shadow-pink-500/30">
                    {isRunning ? <Pause size={16} /> : <Play size={16} />}
                    {isRunning ? 'Pause' : 'Start'}
                  </button>
                  <button onClick={reset} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white border border-white/10">
                    <RotateCcw size={16} /> Reset
                  </button>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-500 to-fuchsia-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: 'easeOut', duration: 0.4 }}
                  />
                </div>
              </div>

              {/* XP */}
              <div className="rounded-xl bg-black/30 border border-white/10 p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white/70 text-sm">XP progress</p>
                  <span className="text-white/60 text-xs">Rewards</span>
                </div>
                <div className="text-white font-extrabold text-3xl">{xp} XP</div>
                <p className="text-white/60 text-xs mt-1">Earn XP each time you finish a focus session.</p>
                <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    key={xp}
                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${xp}%` }}
                    transition={{ ease: 'easeOut', duration: 0.6 }}
                  />
                </div>
                <AnimatePresence>
                  {xp >= 100 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/10 border border-white/10 text-white/90"
                    >
                      <span role="img" aria-label="treasure">🗝️</span>
                      Level up unlocked!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Demo
