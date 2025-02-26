import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

export default function Document() {
  return (

    <Html lang="en" {...mantineHtmlProps}>

      <Head >
        <link rel="shortcut icon" href="/favicon.ico" />
        <ColorSchemeScript />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html >
  );
}
