import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const brand = {
  primary: '#3fbbfe',
  purple: '#ae4dfd',
  amber: '#f2b127',
}

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for brand tint */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="w-full h-full bg-gradient-to-b from-white/70 via-white/60 to-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-24">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: brand.primary }} />
                Digital Services • Custom Websites • Modern SaaS
              </span>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight text-slate-900">
                We design, build, and scale high‑converting digital experiences
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                From strategy to ship, our team crafts lightning‑fast websites and product experiences that convert visitors into loyal customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-white font-semibold shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                  style={{ background: `linear-gradient(135deg, ${brand.primary}, ${brand.purple})` }}
                >
                  Start your project
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-slate-800 bg-white/80 border border-black/10 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                >
                  See how we work
                </a>
              </div>
              <div className="flex items-center gap-6 pt-2">
                <div className="text-sm text-slate-600">
                  Trusted by startups & enterprises worldwide
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-6" />
        </div>
      </div>

      {/* Decorative brand beams */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0" aria-hidden>
        <div className="mx-auto h-2 w-11/12 rounded-full" style={{ background: `linear-gradient(90deg, ${brand.primary}, ${brand.purple}, ${brand.amber})`, opacity: 0.25 }} />
      </div>
    </section>
  )
}
