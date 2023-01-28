import ListDiscoveries from "@/components/discoveries/ListDicoveries";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/header/NavBar";
import ListProducts from "@/components/product/ListCard";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Tbb Test</title>
                <meta
                    name="description"
                    content="Created by Marcos Vinícius Silva Bento"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className={styles.main}>
                <div className="banner-hero" />
                <h3>we're here to help</h3>
                <br />
                <section className="copy-help">
                    <p>
                        When it comes to caring for our most intimate areas,
                        <br /> we’ve lost our connection.
                    </p>
                    <br />
                    <p>
                        Embarrassed, unwilling, or unable to communicate with
                        <br />
                        others, we’re needlessly neglecting the parts of our
                        bodies that need it most.
                    </p>
                    <br />
                    <p>
                        We’re here to help. Providing you with the expertise,
                        <br />
                        knowledge and products you need to feel confident in
                        your personal care.
                    </p>
                </section>
                <div className="icons" />
                <br />
                <h3>
                    whatever your age. whatever your lifestyle. whatever your
                    interests.
                </h3>
                <br />
                <section className="copy-help">
                    <p>
                        Co-created with gynaecologists, our revolutionary
                        products have been expertly developed to support your
                        intimate microbiome and pH balance, and strengthen
                        overall natural health.
                    </p>
                    <p>
                        As the experts in intimate hygiene, we want to bring
                        discussion about intimate wellness care out of the dark
                        and demystify the taboos that surround it.
                    </p>
                </section>
                <br />
                <ListProducts />
                <div className="banner-products" />
                <ListDiscoveries />
            </main>
            <Footer />
        </>
    );
}
