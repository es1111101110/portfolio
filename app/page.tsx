export default function Home() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-sm tracking-widest text-[var(--accent)] uppercase mb-6">
          EC&nbsp;/&nbsp;Shopify&nbsp;/&nbsp;Web
        </p>
        <h1 className="text-5xl font-light leading-tight mb-8">
          PORTFOLIO
        </h1>
        <h2 className="text-4xl font-light leading-tight mb-8">
          Emari Sekikawa
        </h2>
        <p className="text-neutral-500 text-lg font-light leading-relaxed max-w-xl mb-12">
          ECの企画・設計・制作・運用を横断したプロジェクト推進が強みです。
        </p>
        <div className="flex items-center gap-6">

          <a href="/works"
            className="inline-block bg-neutral-900 text-white text-sm tracking-widest uppercase px-8 py-4 hover:bg-neutral-700 transition-colors"
          >
            Works
          </a>

          <a href="/about"
            className="text-sm tracking-widest uppercase text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            About
          </a>
        </div>
      </div>
    </section>
  );
}