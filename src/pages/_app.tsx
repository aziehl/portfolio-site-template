import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import Header from '@/components/page-elements/header';
import Footer from '@/components/page-elements/footer';
// core styles are required for all packages
import '@mantine/core/styles.css';
import { theme } from '@/lib/theme';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>

      <Header />

      <Component {...pageProps} />
      <Footer />
      <Notifications position="top-center" zIndex={1000} />
    </MantineProvider >
  );
}
