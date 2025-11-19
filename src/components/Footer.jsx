export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-700">
          <div className="h-5 w-5 rounded bg-gradient-to-br from-[#3fbbfe] via-[#ae4dfd] to-[#f2b127]" />
          <span className="font-semibold">Facet Digital</span>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}
