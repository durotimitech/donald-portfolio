import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "~/components/partials/Layout";
import { GlobalStyles, theme } from "../components/styles/Globals.styled";
import "antd/dist/antd.css";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
