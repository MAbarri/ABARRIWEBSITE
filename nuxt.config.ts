// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: false}, // Disable in production
    css: ['~/assets/css/main.css', '~/assets/css/markdown.css'],
    modules: [
        '@nuxt/content',
        '@nuxt/ui',
        'nuxt-og-image',
        'motion-v/nuxt'
    ],
    site: {
        url: 'https://mohamedabarri.dev',
        name: 'Mohamed Abarri',
    },
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'theme-color', content: '#000000' },
                { name: 'robots', content: 'index, follow' },
                { name: 'author', content: 'Mohamed Abarri' },
                { name: 'keywords', content: 'Mohamed Abarri, Full-Stack Engineer, ABARRI TECH, SaaS, AI, Blockchain, Nuxt, Vue, Node.js, Azure, AWS' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'canonical', href: 'https://mohamedabarri.dev' }
            ]
        }
    },
    content: {
        experimental: { nativeSqlite: true },
        renderer: {
            anchorLinks: false,
        },
        build: {
            markdown: {
                highlight: {
                    theme: {
                        default: 'github-light',
                        dark: 'github-dark',
                    }
                }
            }
        }
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        }
    }
})