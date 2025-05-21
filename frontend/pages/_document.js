import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo.ico" />
        {/* Puedes agregar más meta tags aquí si quieres */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
