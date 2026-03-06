import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/account/', '/api/'],
        },
        sitemap: 'https://derickhoskinson.com/sitemap.xml',
    }
}
