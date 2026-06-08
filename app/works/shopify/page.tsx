import Layout from "../../components/Layout";

export default function ShopifyWorkPage() {
    const projects = [
        {
            brand: "maison vert",
            url: "https://maisonvert.online/",
            category: "サステナブルバッグ D2C",
            description:
                "環境配慮素材を扱うバッグブランドのShopify構築を担当。既存テーマをベースにブランドの世界観へ合わせて調整しました。",
        },
        {
            brand: "veganview",
            url: "https://veganview.online/",
            category: "アップサイクル素材バッグブランド",
            description:
                "“ジェンダーレスな現代のシンプル”を掲げるバッグブランドのShopify構築を担当。トップページに動画スプラッシュとENTER導線を実装するなど、ブランドの世界観を表現するためのフロントカスタマイズを行いました。",
        },
    ];

    return (
        <Layout>
            <div className="max-w-5xl mx-auto px-6 py-24">

                <a href="/works"
                    className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors tracking-widest uppercase"
                >
                    ← Works
                </a>
                <div className="mt-12 mb-16">
                    <p className="text-sm tracking-widest uppercase text-[var(--accent)] mb-4">
                        Shopify
                    </p>
                    <h1 className="text-4xl font-light mb-6">
                        Shopify ECサイト構築
                    </h1>
                    <p className="text-neutral-400 text-sm mb-4">
                        2020年7月〜2024年10月
                    </p>
                    <div className="flex flex-col gap-1">
                        <p className="text-xs text-neutral-400">
                            <span className="tracking-widest uppercase mr-2">Role</span>
                            ECサイト構築 / テーマカスタマイズ / 決済・配送アプリ導入
                        </p>
                        <p className="text-xs text-neutral-400">
                            <span className="tracking-widest uppercase mr-2">Platform</span>
                            Shopify
                        </p>
                    </div>
                </div>

                <div className="mb-20">
                    <p className="text-neutral-600 font-light leading-relaxed max-w-2xl">
                        Shopifyを用いたファッション小物ブランドのECサイト構築を担当。既存テーマをベースにブランドの世界観へ合わせたカスタマイズと、決済・配送まわりのアプリ導入・設定を行いました。いずれも公開中で、実際のサイトをご覧いただけます。
                    </p>
                </div>

                {/* Projects */}
                <div>
                    <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-10">
                        Projects
                    </h2>
                    <div className="grid grid-cols-1 gap-10">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-12 gap-6 border-t border-neutral-100 pt-8"
                            >
                                <div className="col-span-3">

                                    <a href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-neutral-900 hover:text-[var(--accent)] transition-colors"
                                    >
                                        {project.brand} ↗
                                    </a>
                                    <p className="text-xs text-neutral-300 mt-1">
                                        {project.category}
                                    </p>
                                </div>
                                <div className="col-span-9">
                                    <p className="text-neutral-500 font-light leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}