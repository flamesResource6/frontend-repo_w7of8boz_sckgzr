import { useState } from 'react'
import { motion } from 'framer-motion'

const brand = {
  primary: '#3fbbfe',
  purple: '#ae4dfd',
  amber: '#f2b127',
}

export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'submitting' })

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company') || undefined,
      project_type: form.get('project_type') || undefined,
      budget: form.get('budget') || undefined,
      message: form.get('message') || undefined,
      source: 'website',
      consent: Boolean(form.get('consent')),
      utm_source: new URLSearchParams(window.location.search).get('utm_source') || undefined,
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || undefined,
      utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || undefined,
    }

    // Honeypot
    const honey = ''

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/leads?honey=${encodeURIComponent(honey)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(await res.text())
      const data = await res.json()
      setStatus({ state: 'success', message: data.message })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="contact" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Let’s build something exceptional</h2>
          <p className="text-slate-600 max-w-xl">Tell us about your goals. We’ll come back with a tailored plan, fast timelines, and a team that cares about outcomes.</p>
          <ul className="space-y-3 text-slate-700 text-sm">
            <li>• 1–2 week MVPs and rapid website sprints</li>
            <li>• Conversion and SEO optimized</li>
            <li>• Ongoing growth and iteration support</li>
          </ul>
        </div>

        <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Full name</label>
              <input name="name" required className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2" style={{ boxShadow: `0 0 0 2px transparent`, '--tw-ring-color': brand.primary }} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Work email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Company</label>
              <input name="company" className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Project type</label>
              <select name="project_type" className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2">
                <option value="Website">Website</option>
                <option value="Web App">Web App</option>
                <option value="Ecommerce">Ecommerce</option>
                <option value="Brand & Design">Brand & Design</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Budget</label>
              <select name="budget" className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2">
                <option value="<$5k">Less than $5k</option>
                <option value="$5k-$15k">$5k–$15k</option>
                <option value="$15k-$50k">$15k–$50k</option>
                <option value=">$50k">$50k+</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Tell us more</label>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2" />
            </div>
            <div className="sm:col-span-2 flex items-center gap-2">
              <input id="consent" name="consent" type="checkbox" defaultChecked className="h-4 w-4 rounded border-black/20" />
              <label htmlFor="consent" className="text-sm text-slate-600">You agree to be contacted about your project.</label>
            </div>
            <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button disabled={status.state === 'submitting'} className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-white font-semibold shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900" style={{ background: `linear-gradient(135deg, ${brand.primary}, ${brand.purple})` }}>
              {status.state === 'submitting' ? 'Sending…' : 'Get proposal'}
            </button>
            {status.state === 'success' && <p className="text-sm text-green-600">{status.message}</p>}
            {status.state === 'error' && <p className="text-sm text-red-600">{status.message}</p>}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
