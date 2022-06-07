import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { StoreProvider } from "../Context/Store";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtab";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <ChakraProvider>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
