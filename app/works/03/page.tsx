import Layout from "../../components/Layout";

export default function Work03Page() {
    const projects = [
        {
            industry: "伝統工芸・ライフスタイル",
            service: "Makeshop 構築・運用",
            description:
                "京都の老舗ブランドのECサイト構築・運用を担当。ブランドの世界観を損なわないデザインと、使いやすい購買導線の設計を両立しました。",
        },
        {
            industry: "ベーカリーショップ",
            service: "CPサイト構築・運用",
            description:
                "ベーカリースクールのキャンペーンサイトを制作。スクールのカラーに合わせたデザインと、わかりやすい情報提供を心がけました。",
        },
        {
            industry: "水産物販売",
            service: "ECサイト構築・運用",
            description:
                "水産物の産地直送ECサイトを構築。鮮度や産地情報を効果的に伝えるページ設計と、受注・発送フローの整備をサポートしました。",
        },
        {
            industry: "子育て関係 非営利法人",
            service: "Webサイト制作・運用",
            description:
                "非営利法人のコーポレートサイトおよび情報発信サイトを制作。活動内容をわかりやすく伝えるUI設計と、担当者が自身で更新できるCMS構築を行いました。",
        },
        {
            industry: "お土産・ギフト",
            service: "EC-CUBE/Futureshop 構築・運用",
            description:
                "観光地のお土産・ギフト商品のECサイトを構築。商品の魅力を伝える写真撮影・画像編集から、サイト設計・制作・運用まで担当しました。",
        },
        {
            industry: "アロマ・ライフスタイル",
            service: "E-store構築・運用",
            description:
                "アロマ・ライフスタイル商品のECサイトを構築。テーマカスタマイズから商品登録・運用設定まで一貫して対応しました。",
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
                        Shopify・フリーランス
                    </p>
                    <h1 className="text-4xl font-light mb-6">
                        ECサイト構築・運用支援
                    </h1>
                    <p className="text-neutral-400 text-sm mb-4">
                        フリーランス
                    </p>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col gap-1">
                            <p className="text-xs text-neutral-400">
                                <span className="tracking-widest uppercase mr-2">Role</span>
                                ECサイト構築 / Webデザイン / 撮影・画像編集 / グラフィックデザイン
                            </p>
                            <p className="text-xs text-neutral-400">
                                <span className="tracking-widest uppercase mr-2">Platform</span>
                                Shopify / MakeShop / E-store / FutureShop / EC-CUBE
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-20">
                    <p className="text-neutral-600 font-light leading-relaxed max-w-2xl">
                        フリーランスとして、多業種のECサイト構築・運用支援を担当。Shopifyをはじめ各種プラットフォームに対応し、サイト設計からデザイン・実装・運用まで一気通貫で対応しました。守秘義務の関係上、具体的なビジュアルはお示しできませんが、詳細は面談の場でお伝えできます。
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
                                    <p className="text-xs tracking-widest uppercase text-neutral-400">
                                        {project.industry}
                                    </p>
                                    <p className="text-xs text-neutral-300 mt-1">
                                        {project.service}
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
        </Layout >
    );
}