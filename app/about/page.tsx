import Layout from "../components/Layout";

const skills = [
    {
        category: "Design",
        items: ["Adobe XD", "Photoshop", "Illustrator", "Figma", "Premiere Pro"],
    },
    {
        category: "Development",
        items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Smarty"],
    },
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
                        高校卒業後、アクセサリー・ファッション業界を中心に20年以上のキャリアを歩んできました。
                        EC部署の課長・店舗運営責任者として、サイト立ち上げから大規模リニューアル、
                        システム導入、ブランディングまでを牽引。
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