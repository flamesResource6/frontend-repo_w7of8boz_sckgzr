import { motion, useScroll, useTransform } from 'framer-motion'

export default function Journey() {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])

  const steps = [
    { k: '01', t: 'Discover', d: 'Align on goals, audiences, and success metrics.' },
    { k: '02', t: 'Design', d: 'Craft the brand story, UX flows, and visuals.' },
    { k: '03', t: 'Develop', d: 'Ship fast with clean, scalable code.' },
    { k: '04', t: 'Launch', d: 'Measure, iterate, and accelerate growth.' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">A journey built on outcomes</h2>
          <p className="mt-3 text-slate-600">Story‑driven animations illustrate how we transform ideas into impact.</p>
        </div>
      </div>

      <motion.div style={{ x }} className="mt-12 flex gap-6 will-change-transform">
        {steps.map((s, i) => (
          <motion.div
            key={s.k}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="min-w-[280px] flex-1 rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
          >
            <div className="text-xs font-semibold tracking-widest text-slate-500">{s.k}</div>
            <div className="mt-2 text-xl font-semibold text-slate-900">{s.t}</div>
            <div className="mt-2 text-slate-600">{s.d}</div>
            <div className="mt-6 h-1 w-full rounded-full" style={{ background: 'linear-gradient(90deg, #3fbbfe, #ae4dfd, #f2b127)' }} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
