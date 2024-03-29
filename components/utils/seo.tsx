import Head from 'next/head'

interface SeoComponent {
  title: string, description: string, pageSuffix: string, bannerSuffix?: string
}

export default function Seo({ title, description, pageSuffix, bannerSuffix = '/devs-coffee.png' }: SeoComponent) {
  const BASE_URL = 'https://devs.coffee'
  const pageUrl = BASE_URL + pageSuffix
  const bannerUrl = BASE_URL + bannerSuffix

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="icon" href="favicon.svg" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={bannerUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={bannerUrl} />
    </Head>
  )
}
