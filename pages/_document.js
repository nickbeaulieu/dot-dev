import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
