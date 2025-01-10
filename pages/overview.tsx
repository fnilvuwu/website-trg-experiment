import { NavBar } from '../components/nav-bar'

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <NavBar />
            <article className="max-w-3xl mx-auto px-4 py-16 md:py-24 flex-grow">
                <header className="space-y-8 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                        Research Group Overview
                    </h1>
                    <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                        OVERVIEW OF DSAI
                    </div>
                </header>

                <section className="mb-8">
                    <h3 className="font-semibold text-center uppercase tracking-wider text-md font-medium text-muted-foreground mb-8">
                        Introduction
                    </h3>

                    <div className="space-y-8">
                        <p className="leading-relaxed">
                            Welcome to the official website of the Data Science and Artificial Intelligence (DSAI) research group!
                        </p>
                        <p className="leading-relaxed">
                            We are delighted to have you join us on our journey to revolutionize the medical sector through the power of data science and artificial intelligence. Our team is passionate about unlocking insights that drive transformative change, and we're committed to pushing the boundaries of technology to make a significant impact.
                        </p>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="font-semibold text-center uppercase tracking-wider text-md font-medium text-muted-foreground mb-8">
                        Research Roadmap
                    </h3>
                    <div className="space-y-8">
                        <div className="flex justify-center">
                            <img
                                src="/images/research-roadmap.jpg"
                                alt="research-roadmap"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="font-semibold text-center uppercase tracking-wider text-md font-medium text-muted-foreground mb-8">
                        Research Sub-theme
                    </h3>

                    <div className="space-y-8">
                        <h2 className="uppercase text-sm font-small tracking-wider text-muted-foreground mb-8">
                            Medical AI Innovations
                        </h2>
                        <p className="leading-relaxed">
                            At DSAI Lab, we specialize in harnessing the power of Data Science and Artificial Intelligence to revolutionize the medical sector. Our research focuses on developing advanced AI solutions to enhance medical performance, aiming to reduce human error and improve the overall quality of healthcare services.
                        </p>
                        <p className="leading-relaxed">
                            Our work includes creating predictive models for early diagnosis, optimizing treatment plans through machine learning, and implementing AI-driven systems to support healthcare professionals. By integrating AI in critical areas of the medical field, we strive to make healthcare more efficient, accurate, and accessible, ultimately transforming patient care and outcomes.
                        </p>
                    </div>
                </section>
            </article>
        </main >
    )
}
