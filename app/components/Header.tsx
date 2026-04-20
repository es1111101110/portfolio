export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-sm font-medium tracking-widest uppercase">
          Emari Sekikawa
        </a>
        <nav className="flex items-center gap-8">
          <a href="/works" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
            Works
          </a>
          <a href="/about" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
            About
          </a>
          {/* <a href="/contact" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
            Contact
          </a> */}
        </nav>
      </div>
    </header>
  );
}