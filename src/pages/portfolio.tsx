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
        </>
    );
}
