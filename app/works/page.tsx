import Image from "next/image";

type Work = {
    id: string;
    category: string;
    title: string;
    description: string;
    tags: string[];
    achievement: string;
    image: string | null;
    slug: string | null;
};

const works: Work[] = [
    {
        id: "01",
        category: "ECリニューアル",
        title: "ファッションブランド ECサイト大規模リニューアル",
        description:
            "バッグ・ファッションブランドの自社ECサイトをモバイル対応・UI刷新。Google Analyticsを用いたデータ分析をもとにUX改善施策を立案・実行し、販売数および顧客数の継続的な向上を実現。",
        tags: ["HTML/CSS", "JavaScript", "Google Analytics", "UX改善"],
        achievement: "販売数・顧客数の継続的向上を達成",
        image: "/images/work-01.png",
        slug: "01", // ← 追加
    },
    {
        id: "02",
        category: "EC運営・楽天市場",
        title: "アクセサリーEC店舗運営",
        description:
            "楽天市場にてアクセサリー（ピアス・イヤリング）カテゴリの店舗運営を担当。売上ランキング1位を獲得。商品企画・デザイン・発注・販促まで一貫して対応。",
        tags: ["楽天市場", "商品企画", "アートディレクション"],
        achievement: "カテゴリ売上ランキング1位獲得",
        image: null,
        slug: null,
    },
    {
        id: "03",
        category: "Shopify・フリーランス",
        title: "ECサイト構築・運用支援（フリーランス）",
        description:
            "フリーランスとしてShopifyを含むECサイトの構築・運用全般、コーポレートサイト制作、グラフィックデザイン・DTPなど幅広く対応。",
        tags: ["Shopify", "WordPress", "HTML/CSS", "グラフィックデザイン"],
        achievement: "構築から運用まで一気通貫で対応",
        image: null,
        slug: null,
    },
    {
        id: "04",
        category: "ブランディング・クラウドファンディング",
        title: "ジュエリーブランド クラウドファンディング",
        description:
            "ジュエリーブランドのプロダクトサイトUX改善およびブランド戦略を担当。クラウドファンディングプロジェクトの企画・デザインを手がけ、企画デザイン賞を受賞。",
        tags: ["UXデザイン", "ブランディング", "Photoshop", "Illustrator"],
        achievement: "企画デザイン賞受賞",
        image: "/images/work-03.png",
        slug: null,
    },
];

export default function WorksPage() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-24">
            <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-4">Works</h2>
            <h1 className="text-4xl font-light mb-16">実績</h1>
            <div className="grid grid-cols-1 gap-12">
                {works.map((work) => (
                    <div
                        key={work.id}
                        className="grid grid-cols-12 gap-6 border-t border-neutral-100 pt-10"
                    >
                        <div className="col-span-1">
                            <span className="text-sm text-neutral-300 font-light">{work.id}</span>
                        </div>
                        <div className="col-span-11">
                            <p className="text-xs tracking-widest uppercase text-neutral-400 mb-2">
                                {work.category}
                            </p>
                            <h3 className="text-xl font-medium mb-4">{work.title}</h3>
                            {work.image && (
                                <div
                                    className="w-full mb-6 overflow-y-auto"
                                    style={{ maxHeight: "500px" }}
                                >
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        width={2466}
                                        height={11545}
                                        className="w-full h-auto"
                                    />
                                </div>
                            )}
                            <p className="text-neutral-500 font-light leading-relaxed mb-6">
                                {work.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {work.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs border border-neutral-200 text-neutral-400 px-3 py-1"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm text-[var(--accent)]">{work.achievement}</p>
                            {work.slug && (

                                <a href={`/works/${work.slug}`}
                                    className="inline-block mt-3 text-xs tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors"
                                >
                                    詳細を見る →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}