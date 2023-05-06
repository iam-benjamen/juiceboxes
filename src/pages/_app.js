import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import Layout from "../../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
