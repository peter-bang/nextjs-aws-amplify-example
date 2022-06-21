import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { NextPage } from "next";

//for amplify initialization
import Amplify from "aws-amplify";
import awsconfig from "../src/aws-exports";

Amplify.configure(awsconfig);

//for auth hook and ui
import { Authenticator } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

/*For Per-page layout! */
type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <Authenticator.Provider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/* <GlobalStyles /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Authenticator.Provider>
  );
}
