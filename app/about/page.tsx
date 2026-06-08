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
                        EC・WEBディレクション
                        • ECサイトの新規立ち上げ・プラットフォーム移行・大規模リニューアルの主導（EC-CUBE / Shopify /
                        futureshop / Makeshop / E-store）
                        • 要件定義・業務フロー設計・運用設計など上流工程の対応経験
                        • 外注制作会社のディレクション・コスト最適化
                        データ分析・改善
                        • Google Analyticsを用いたユーザー行動分析・CVR改善施策の立案・実行
                        • A/Bテストによる成約率・顧客満足度の向上
                        システム導入・PM
                        • POS・在庫管理・EC-CUBE等のシステム導入推進（コスト定量化→経営層への提案→API連携まで一
                        気通貫）
                        • 複数ベンダー・社内SE・開発会社との折衝・調整
                        フロントエンド・制作
                        • HTML / CSS / JavaScript / Smartyによるページ制作・実装
                        • Adobe XD / Photoshop / Illustratorを用いたUI設計・グラフィック制作
                        マーケティング・販促
                        • SNS運用・広告・販促企画・年間予算策定と管理
                        • クラウドファンディング運営（Makuake）
                        マネジメント
                        • 最大20名規模のチームマネジメント・育成・外注ディレクション
                        その他
                        • ローコード開発（Filemaker）
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