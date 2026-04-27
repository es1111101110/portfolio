import Image from "next/image";
import Layout from "../../components/Layout";

export default function Work05Page() {
    const banners: { id: string; src: string; alt: string }[] = [
        { id: "00", src: "/images/banner-00.jpg", alt: "バナーデザイン00" },
        { id: "01", src: "/images/banner-01.jpg", alt: "バナーデザイン01" },
        { id: "02", src: "/images/banner-02.jpg", alt: "バナーデザイン02" },
        { id: "03", src: "/images/banner-03.jpg", alt: "バナーデザイン03" },
        { id: "04", src: "/images/banner-04.jpg", alt: "バナーデザイン04" },
        { id: "05", src: "/images/banner-05.jpg", alt: "バナーデザイン05" },
    ];

    const smallBanners: { id: string; src: string; alt: string }[] = [
        { id: "06", src: "/images/banner-06.jpg", alt: "バナーデザイン06" },
        { id: "09", src: "/images/banner-09.jpg", alt: "バナーデザイン09" },
    ];

    return (
        <Layout>
            <div className="max-w-5xl mx-auto px-6 py-24">
                <a
                    href="/works"
                    className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors tracking-widest uppercase"
                >
                    ← Works
                </a>

                <div className="mt-12 mb-16">
                    <p className="text-sm tracking-widest uppercase text-[var(--accent)] mb-4">
                        バナー・グラフィックデザイン
                    </p>
                    <h1 className="text-4xl font-light mb-6">
                        バナー・ロゴデザイン
                    </h1>
                    <div className="flex flex-col gap-1">
                        <p className="text-xs text-neutral-400">
                            <span className="tracking-widest uppercase mr-2">Tools</span>
                            Photoshop / Illustrator
                        </p>
                    </div>
                </div>

                <div className="mb-20">
                    <p className="text-neutral-600 font-light leading-relaxed max-w-2xl">
                        ファッション・バッグ・ジュエリーブランドのECサイト向けバナーおよびロゴデザインを担当。セール・新商品・コラボレーションなど、目的に合わせたビジュアル制作を行いました。
                    </p>
                </div>

                {/* Banners */}
                <div className="mb-20">
                    <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-10">
                        Banner
                    </h2>
                    <div className="grid grid-cols-2 gap-8">
                        {banners.map((banner) => (
                            <div key={banner.id} className="w-full">
                                <Image
                                    src={banner.src}
                                    alt={banner.alt}
                                    width={800}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Small Banners */}
                    <div className="flex gap-8 mt-8">
                        {smallBanners.map((banner) => (
                            <div key={banner.id} className="max-w-[200px] flex items-center justify-center">
                                <Image
                                    src={banner.src}
                                    alt={banner.alt}
                                    width={400}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logo */}
                <div>
                    <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-10">
                        Logo
                    </h2>
                    <div className="flex gap-8">
                        <div className="max-w-[160px] flex items-center justify-center">
                            <Image
                                src="/images/banner-07.jpg"
                                alt="ロゴデザイン01"
                                width={400}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="max-w-[160px] flex items-center justify-center">
                            <Image
                                src="/images/banner-08.jpg"
                                alt="ロゴデザイン02"
                                width={400}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}