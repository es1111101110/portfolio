import Layout from "../components/Layout";

export default function ContactPage() {
    return (
        <Layout>
            <div className="max-w-5xl mx-auto px-6 py-24">
                <div className="max-w-xl">
                    <div className="border-t border-neutral-100 pt-10">

                        <a href="mailto:emarisekikawa@gmail.com"
                            className="text-2xl font-light hover:text-[var(--accent)] transition-colors"
                        >
                            CONTACT
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}