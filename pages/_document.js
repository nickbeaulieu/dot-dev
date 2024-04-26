import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'nickbeaulieu.dev',
    description:
      "Hey 👋 I'm Nick! I'm sharing my experiences as a software developer, and things I learn along the way. Currently, my work is focused on Cloudflare, Solid, and Yjs.",
    image: '/image/home.png',
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* TODO: make a preview image */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
