export default {
  footer: (
    <>
      <hr />
      <p className="flex gap-2">
        <a href="https://github.com/nickbeaulieu" target="github">
          Github
        </a>
      </p>
    </>
  ),
  head: ({ title, meta }) => {
    return (
      <>
        {title && <title>{title + ' | nickbeaulieu.dev'}</title>}
        {meta.description && (
          <meta name="description" content={meta.description} />
        )}
        {meta.tag && <meta name="keywords" content={meta.tag} />}
        {meta.author && <meta name="author" content={meta.author} />}
        <meta name="robots" content="follow, index" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nickbeaulieu_" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </>
    )
  },
  readMore: 'Read More →',
  postFooter: null,
  darkMode: true,
  navs: [
    {
      url: 'https://docs.stashpad.com',
      name: 'Stashpad ↗',
    },
  ],
}
