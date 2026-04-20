export default function Footer() {
    return (
        <footer className="border-t border-neutral-100 mt-24">
            <div className="max-w-5xl mx-auto px-6 py-10 flex items-center justify-between">
                <p className="text-xs text-neutral-300">
                    © 2026 Emari Sekikawa
                </p>

                <a href="mailto:emarisekikawa@gmail.com"
                className="text-xs text-neutral-400 hover:text-[var(--accent)] transition-colors"
        >
                CONTACT
            </a>
        </div>
    </footer >
  );
}