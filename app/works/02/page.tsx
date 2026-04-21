import Layout from "../../components/Layout";

export default function Work02Page() {
    const initiatives = [
        {
            number: "01",
            title: "商品企画・デザイン",
            description:
                "アクセサリーのデザインを自身で手がけ、必要なパーツの種類・数量・発注量を算出。中国工場への発注業務を担当し、製造方法のレクチャーも行いました。トレンド分析に基づいた商品開発により、楽天市場アクセサリーカテゴリで売上ランキング1位を獲得しました。",
        },
        {
            number: "02",
            title: "受注・発送・顧客対応",
            description:
                "受注から発送・顧客対応まで一貫して担当。注文数の増加に伴い、ピッキングの正確性と迅速性を高めるために倉庫レイアウトを改造。梱包方法の工夫により、作業効率と顧客満足度の向上を実現しました。",
        },
        {
            number: "03",
            title: "ECモール運営・販促",
            description:
                "楽天市場店舗の運営管理全般を担当。撮影・販促企画・受注発送・顧客対応まで幅広く対応しました。",
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
                    EC運営・楽天市場
                </p>
                <h1 className="text-4xl font-light mb-6">
                    アクセサリーEC店舗運営
                </h1>
                <p className="text-neutral-400 text-sm mb-4">
                    楽天市場
                </p>
                <div className="flex flex-col gap-1">
                    <p className="text-xs text-neutral-400">
                        <span className="tracking-widest uppercase mr-2">Period</span>
                        2003年9月 〜 2005年2月
                    </p>
                    <p className="text-xs text-neutral-400">
                        <span className="tracking-widest uppercase mr-2">Role</span>
                        商品企画 / デザイン / 発注 / 店舗運営 / 受注・発送・顧客対応
                    </p>
                </div>
            </div>

            <div className="mb-20">
                <p className="text-neutral-600 font-light leading-relaxed max-w-2xl">
                    楽天市場にてアクセサリーの企画・デザインから製造発注・撮影・受注発送までのEC事業工程を担当。ピアス・イヤリングカテゴリで売上ランキング1位を獲得しました。
                </p>
            </div>

            {/* Achievement */}
            <div className="mb-20">
                <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-10">
                    Achievement
                </h2>
                <div className="border border-neutral-100 p-8 max-w-sm">
                    <p className="text-4xl font-light text-neutral-900 mb-3">
                        1位
                    </p>
                    <p className="text-sm text-neutral-400">楽天市場 ピアス・イヤリングカテゴリ 売上ランキング</p>
                </div>
            </div>

            {/* Initiatives */}
            <div>
                <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-10">
                    Initiatives
                </h2>
                <div className="grid grid-cols-1 gap-10">
                    {initiatives.map((item) => (
                        <div
                            key={item.number}
                            className="grid grid-cols-12 gap-6 border-t border-neutral-100 pt-8"
                        >
                            <div className="col-span-1">
                                <span className="text-sm text-neutral-300 font-light">
                                    {item.number}
                                </span>
                            </div>
                            <div className="col-span-11">
                                <h3 className="text-base font-medium mb-3">{item.title}</h3>
                                <p className="text-neutral-500 font-light leading-relaxed">
                                    {item.description}
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