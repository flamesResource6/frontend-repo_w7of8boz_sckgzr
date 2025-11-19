import { motion } from 'framer-motion'
import { Sparkles, Rocket, Gauge, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: Sparkles,
    title: 'Conversion-first design',
    desc: 'Purposeful storytelling, premium visuals, and micro‑interactions crafted to guide users to action.',
  },
  {
    icon: Rocket,
    title: 'Blazing performance',
    desc: 'Optimized for Core Web Vitals with responsive images, code‑splitting, and accessibility built‑in.',
  },
  {
    icon: Gauge,
    title: 'Scales seamlessly',
    desc: 'From MVP to enterprise, our modular architecture grows with your business goals.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted & secure',
    desc: 'Best practices across security, privacy, and reliability to keep your data protected.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Everything you need to win online</h2>
          <p className="mt-3 text-slate-600">From concept to conversion, we cover the full stack of digital success.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 inline-flex rounded-lg p-2" style={{ background: 'linear-gradient(135deg, #eaf6ff, #f8ecff)' }}>
                <item.icon className="h-6 w-6" color="#3fbbfe" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
