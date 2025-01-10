import { NavBar } from '../components/nav-bar'

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />
            <article className="max-w-3xl mx-auto px-4 py-16 md:py-24 flex-grow fade-in">
                <header className="space-y-8 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                        Articles
                    </h1>
                    <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                        ARTICLES CURATED BY DSAI
                    </div>
                </header>

                <section className="mb-16">
                    <h2 className="uppercase text-sm font-small tracking-wider text-muted-foreground mb-8">
                        ARTICLES CURATED BY DSAI
                    </h2>
                    <div className="space-y-8">
                        <p className="leading-relaxed">
                            The invention of Bitcoin was a revolutionary moment for humanity because it introduced two simultaneously united yet distinct technological innovations, reshaping the way that humans organize themselves. Primarily, it was the first ever decentralized currency, which gave humanity a shared value system - one that could not be mutated by vested or centralized interests. With this, Bitcoin promised a future of fair, anti-fiat, finance.
                        </p>
                        <p className="leading-relaxed">
                            Secondly and to achieve this aim, it birthed the original, disseminated, and permissionless digital commodity market. This second point has not been overlooked by anyone who has been watching closely - the Bitcoin network's computational power, measured in raw hashing power, has blast past the potential of any company or government.
                        </p>
                        <p className="leading-relaxed">
                            Bittensor is essentially a language for writing numerous decentralized commodity markets, or 'subnets', situated under a unified token system. These distinct markets function through Bittensor's blockchain, allowing each to interact and join into a singular computing infrastructure. By analogy, Bittensor brings the same type of abstraction which Ethereum added to Bitcoin for running decentralized contracts, but onto Bitcoin's inverse innovation — <span className="italic">digital markets</span>.
                        </p>
                        <p className="leading-relaxed">
                            Compared to Bitcoin and other cryptocurrencies attempting to leverage the digital marketplace, Bittensor has built a framework that provides ease for creating these viable and enormously powerful systems. However, its genius lies in the fact that every one of these inter-networked markets is connectable, and available, to the whole. Building a hierarchical web of resources, ultimately culminating in the creation of a decentralized intelligence market.
                        </p>
                    </div>

                </section>
            </article>
        </main>
    )
}

