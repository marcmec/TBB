import "@/styles/globals.css";
import "../components/discoveries/style.css";
import "../components/header/style.css";
import "../components/product/style.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
