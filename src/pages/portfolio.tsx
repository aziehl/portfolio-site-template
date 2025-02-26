import Head from 'next/head';
import PortfolioPhotos from "@/components/portfolio/portfolio-photos";


export default function Portfolio() {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <link rel="canonical" href={"/portfolio"} />
                <meta httpEquiv="Accept-CH" content="DPR, Width"></meta>
            </Head>

            <PortfolioPhotos />
            {/* photos={PortfolioPhotos}
                        render={{ image: renderNextImage }}
                        defaultContainerWidth={1200}
                        sizes={{
                            size: "1168px",
                            sizes: [
                                { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
                            ],
                        }}
                    /> */}

        </>
    );
}
