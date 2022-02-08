/**
 * site title
 */
export const siteTitle = process.env.NEXT_PUBLIC_SITE_NAME || 'site name'

/**
 * next-seo defaultS config
 */
export const defaultSeo = {
  defaultTitle: siteTitle,
  titleTemplate: `%s | ${siteTitle}`,
}
