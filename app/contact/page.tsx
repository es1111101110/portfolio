export default function ContactPage() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-24">
            {/* <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-4">
                Contact
            </h2> */}
            {/* <h1 className="text-4xl font-light mb-16">お問い合わせ</h1> */}

            <div className="max-w-xl">
                {/* <p className="text-neutral-500 font-light leading-relaxed mb-12">
                    ECサイト構築・Shopifyカスタマイズ・Webデザインに関するご相談は、
                    下記メールアドレスよりお気軽にどうぞ。
                </p> */}

                <div className="border-t border-neutral-100 pt-10">
                    {/* <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">
                        Email
                    </p> */}
                    <a
                        href="mailto:emarisekikawa@gmail.com"
                        className="text-2xl font-light hover:text-[var(--accent)] transition-colors"
                    >
                        CONTACT
                    </a>
                </div>
            </div>
        </div>
    );
}