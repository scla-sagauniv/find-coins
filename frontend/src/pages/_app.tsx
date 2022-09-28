import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script async src="https://www.google.com/jsapi" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
