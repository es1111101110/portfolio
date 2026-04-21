import Layout from "../../components/Layout";

export default function Work04Page() {
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
                        ブランディング・クラウドファンディング
                    </p>
                    <h1 className="text-4xl font-light mb-6">
                        ジュエリーブランド クラウドファンディング
                    </h1>
                    <p className="text-neutral-400 text-sm mb-4">
                        株式会社ジュエリー京都｜

                        <a href="https://www.makuake.com/project/piari2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--accent)] transition-colors"
                        >
                            Makuake プロジェクトページ
                        </a>
                    </p>
                    <div className="flex flex-col gap-1">
                        <p className="text-xs text-neutral-400">
                            <span className="tracking-widest uppercase mr-2">Period</span>
                            2015年7月 〜 2019年8月
                        </p>
                        <p className="text-xs text-neutral-400">
                            <span className="tracking-widest uppercase mr-2">Role</span>
                            商品デザイン / 企画 / アートディレクション / UXデザイン / プロジェクト管理
                        </p>
                    </div>
                </div>

                <div className="mb-20">
                    <p className="text-neutral-600 font-light leading-relaxed max-w-2xl">
                        ジュエリーブランドのプロダクトサイトUX改善およびブランド戦略を担当。商品デザインも手がけ、クラウドファンディングプロジェクトの企画・デザインを推進。開催中にYahoo!ニュースに掲載されるほどの反響を獲得。プロジェクト終了後もシリーズとして継続し、大ヒットを記録しました。
                    </p>
                </div>

                {/* Achievement */}
                <div className="mb-20">
                    <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-10">
                        Achievement
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="grid grid-cols-12 gap-6 border-t border-neutral-100 pt-8">
                            <div className="col-span-1">
                                <span className="text-sm text-neutral-300 font-light">01</span>
                            </div>
                            <div className="col-span-11">
                                <h3 className="text-base font-medium mb-2">企画デザイン賞受賞</h3>
                                <p className="text-neutral-500 font-light leading-relaxed">
                                    Makuakeにてクラウドファンディングプロジェクトの企画・デザインが高く評価され、企画デザイン賞を受賞しました。
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-6 border-t border-neutral-100 pt-8">
                            <div className="col-span-1">
                                <span className="text-sm text-neutral-300 font-light">02</span>
                            </div>
                            <div className="col-span-11">
                                <h3 className="text-base font-medium mb-2">Yahoo!ニュース掲載</h3>
                                <p className="text-neutral-500 font-light leading-relaxed">
                                    クラウドファンディング開催中に反響の大きさからYahoo!ニュースに取り上げられ、さらなる注目を集めました。
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-6 border-t border-neutral-100 pt-8">
                            <div className="col-span-1">
                                <span className="text-sm text-neutral-300 font-light">03</span>
                            </div>
                            <div className="col-span-11">
                                <h3 className="text-base font-medium mb-2">シリーズ継続</h3>
                                <p className="text-neutral-500 font-light leading-relaxed">
                                    プロジェクトが大ヒットし、終了後もシリーズとして継続。長期にわたって支持されるブランドコンテンツへと発展しました。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div>
                    <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-10">
                        Visual
                    </h2>
                    <div
                        className="w-full overflow-y-auto"
                        style={{ maxHeight: "500px" }}
                    >
                        <img
                            src="/images/work-03.png"
                            alt="ジュエリーブランド クラウドファンディング"
                            className="w-full h-auto"
                        />
                    </div>
                    <p className="text-xs text-neutral-300 mt-4">
                        ※約10年前の制作物のため、画質が低下しております。
                    </p>
                </div>
            </div>
        </Layout>
    );
}