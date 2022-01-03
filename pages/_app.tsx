import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "~/components/partials/Layout";
import { GlobalStyles, theme } from "../components/styles/Globals.styled";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
