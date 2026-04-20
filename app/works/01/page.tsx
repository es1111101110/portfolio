export default function Work01Page() {
    const metrics = [
        { label: "PV", value: "+200%" },
        { label: "新規ユーザー数", value: "+30%" },
        { label: "総ユーザー数", value: "+15%" },
    ];

    const initiatives = [
        {
            number: "01",
            title: "コンテンツ表示戦略の最適化",
            description:
                "リピーター比率の高いサイトの課題であった「ユーザーの慣れによる離脱」を解消するため、新規商品が少ない時期にはランキングコンテンツをファーストビューへ優先表示するよう調整。定番商品に埋もれがちな新着商品の訴求力を強化し、再訪時のコンテンツ鮮度を維持しました。",
        },
        {
            number: "02",
            title: "ファーストビュー導線の改善",
            description:
                "スライドバナーの操作性の低さと読み込み遅延による訴求機会の損失を課題と特定し、スライド上部に静的バナーエリアを新設。重点訴求コンテンツの視認性・到達率を向上させました。",
        },
        {
            number: "03",
            title: "商品ページ構造の抜本的な見直し（SKU統合）",
            description:
                "サイズ・カラー展開の多い商品について、バリエーションごとに個別ページが存在していたため、ユーザーが目的の商品にたどり着けない構造的な課題を特定。全バリエーションを1商品ページに集約する設計に変更し、商品の比較・選択体験を大幅に改善しました。",
        },
        {
            number: "04",
            title: "受注〜発送フローの内製化",
            description:
                "受注〜発送業務を内製化するにあたり、業務フローをゼロから設計。梱包資材の選定・コスト比較からパッケージデザインの制作まで一貫して担当し、ブランドイメージと運用効率を両立した出荷体制を構築しました。",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto px-6 py-24">
            {/* Back */}

            <a href="/works"
                className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors tracking-widest uppercase">
                ← Works
            </a>

            {/* Header */}
            <div className="mt-12 mb-16">
                <p className="text-sm tracking-widest uppercase text-[var(--accent)] mb-4">
                    ECリニューアル
                </p>
                <h1 className="text-4xl font-light mb-6">
                    ファッションブランド ECサイト大規模リニューアル
                </h1>
                <p className="text-neutral-400 text-sm">
                    株式会社シカタ｜

                    <a href="https://www.ysaccs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent)] transition-colors"
                    >
                        ysaccs.com
                    </a>
                </p>
            </div >

            {/* Overview */}
            < div className="mb-20" >
                <p className="text-neutral-600 font-light leading-relaxed max-w-2xl">
                    自社ECサイトのリニューアルおよび受注〜発送業務の内製化を、企画・ディレクション・コーディング・撮影・画像編集・パッケージデザインまで推進。
                </p>
            </div >

            {/* Metrics */}
            < div className="mb-20" >
                <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-10">
                    Results
                </h2>
                <div className="grid grid-cols-3 gap-6">
                    {metrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="border border-neutral-100 p-8"
                        >
                            <p className="text-4xl font-light text-neutral-900 mb-3">
                                {metric.value}
                            </p>
                            <p className="text-sm text-neutral-400">{metric.label}</p>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-neutral-300 mt-4">
                    ※リニューアル後、半年間の平均
                </p>
            </div >

            {/* Initiatives */}
            < div >
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
            </div >
        </div >
    );
}