import Layout from "../components/Layout";

const skills = [
    {
        category: "Design",
        items: ["Adobe XD", "Photoshop", "Illustrator", "Figma", "Premiere Pro"],
    },
    // {
    //     category: "Development",
    //     items: ["HTML5", "CSS3","JavaScript","Typescript","Smarty"],
    // },
    {
        category: "Platform",
        items: ["Shopify", "MakeShop", "E-store", "EC-CUBE", "FutureShop", "WordPress", "楽天市場"],
    },
    {
        category: "Other",
        items: ["UXデザイン", "アートディレクション", "チームマネジメント", "外注ディレクション"],
    },
];

export default function AboutPage() {
    return (
        <Layout>
            <div className="max-w-5xl mx-auto px-6 py-24">
                <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-4">About</h2>
                <h1 className="text-4xl font-light mb-16">プロフィール</h1>

                {/* Bio */}
                <div className="grid grid-cols-1 gap-6 mb-24 max-w-2xl">
                    <p className="text-neutral-600 font-light leading-relaxed">
                        アパレル販売を経てファッション、アクセサリー、ライフスタイルブランド、食品販売など20年以上、
                        EC/WEBのキャリアを歩んで参りました。株式会社ジュエリー京都ではEC/企画の課長として、
                        自社ECサイトの立ち上げからプラットフォーム移行、リプレイス、ブランディング、システム導入、シ
                        ステム導入、DX化や業務改善を牽引。前職の株式会社シカタではEC店舗運営責任者として、データ分
                        析に基づいたUI/UX改善や予算管理を統括し、売上・顧客数の工場を実現しました。またフリーランス
                        活動ではwebディレクション、デザイン、コーディング、運用支援を行いました。クリエイティブデザイ
                        ン、コーディング、デジタルマーケティング、そしてチームマネジメントまで、EC事業に関わる全工程
                        を網羅的にコントロールできる点が強みです。
                    </p>
                </div>

                {/* Skills */}
                <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-12">Skills</h2>
                <div className="grid grid-cols-1 gap-10">
                    {skills.map((skill) => (
                        <div
                            key={skill.category}
                            className="grid grid-cols-12 gap-6 border-t border-neutral-100 pt-8"
                        >
                            <div className="col-span-3">
                                <p className="text-sm tracking-widest uppercase text-neutral-400">
                                    {skill.category}
                                </p>
                            </div>
                            <div className="col-span-9 flex flex-wrap gap-3">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="text-sm text-neutral-600 font-light"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}