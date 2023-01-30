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
                <title>intibiome</title>
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
                <img className="banner-hero" src="/banner-hero@2x.png" />
                <img
                    className="banner-hero-mobile"
                    src="/banner-intibiome-02@2x.png"
                />

                <h3>we're here to help</h3>
                <br />

                <section className="copy-help">
                    <article>
                        <p>
                            When it comes to caring for our most intimate areas,
                            <br /> we’ve lost our connection.
                        </p>
                        <br />
                        <p>
                            Embarrassed, unwilling, or unable to communicate
                            with
                            <br />
                            others, we’re needlessly neglecting the parts of our
                            bodies that need it most.
                        </p>
                        <br />
                        <p>
                            We’re here to help. Providing you with the
                            expertise,
                            <br />
                            knowledge and products you need to feel confident in
                            your personal care.
                        </p>
                    </article>
                </section>
                {/* <div className="icons" /> */}
                <img src="/icons@2x.png" className="img-icons" />

                <br />
                <h3>
                    whatever your age. whatever your lifestyle. whatever your
                    interests.
                </h3>
                <br />
                <section className="copy-help">
                    <article>
                        <p>
                            Co-created with gynaecologists, our revolutionary
                            products have been expertly developed to support
                            your intimate microbiome and pH balance, and
                            strengthen overall natural health.
                        </p>
                        <p>
                            As the experts in intimate hygiene, we want to bring
                            discussion about intimate wellness care out of the
                            dark and demystify the taboos that surround it.
                        </p>
                    </article>
                </section>
                <br />
                <ListProducts />
                <img className="banner-products" src="/Asset 22@2x.png" />
                <img
                    src="/banner-intibiome-05@2x.png"
                    className="banner-products-mobile"
                />
                <ListDiscoveries />
            </main>
            <Footer />
        </>
    );
}
