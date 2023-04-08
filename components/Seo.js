import Head from "next/head";
import metadata from "../data/metadata";

const Seo = ({
    title,
    description
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content={metadata.authorName} />
            <meta name="description" content={description} />
            <meta name="keywords" content="Nicholas, Nick, Langley, Portfolio, Web, Design, Programmer" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Seo