module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'starter',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'},
        ],
        link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    },

    mode: 'universal',
    srcDir: 'src',

    /*
    ** Global CSS
    */
    css: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        ['cookie-universal-nuxt', { parseJSON: false }],
        ['nuxt-i18n', {
            locales: [
                {
                    code: 'en',
                    name: 'English',
                    iso: 'en-US'
                },
                {
                    code: 'ja',
                    name: 'Japanese',
                    iso: 'ja_JP'
                }
            ],
            defaultLocale: 'ja',
            vueI18n: {
                // fallbackLocale: 'ja'
            },
            vueI18nLoader: true,
            detectBrowserLanguage: {
                useCookie: false,
            },
            seo: true,
        }],
        // ['nuxt-i18n', {
        //     detectBrowserLanguage: {
        //         useCookie: true,
        //         cookieKey: 'lang',
        //         alwaysRedirect: true,
        //         fallbackLocale: 'ja'
        //     },
        //     vuex: {
        //         moduleName: 'i18n',
        //         mutations: {
        //             setLocale: 'I18N_SET_LOCALE',
        //             setMessages: false
        //         },
        //         preserveState: false
        //     },
        //     onLanguageSwitched: (previous, current) => {
        //         if (process.client) {
        //             const DATE = new Date();
        //             DATE.setTime(DATE.getTime() + 365 * 24 * 3600 * 1000);
        //             document.cookie = 'lang=' + current + '; path=/; expires=' + DATE.toUTCString();
        //         }
        //     }
        // }]
    ],
    /*
    ** Add axios globally
    */
    build: {
        vendor: ['axios'],
        /*
        ** Run ESLINT on save
        */
        // extend(config, ctx) {
        //     if (ctx.isClient) {
        //         config.module.rules.push({
        //             enforce: 'pre',
        //             test: /\.(js|vue)$/,
        //             loader: 'eslint-loader',
        //             exclude: /(node_modules)/,
        //         });
        //     }
        // },
    },
    plugins: [
        '~/plugins/index',
        '@/plugins/nuxt-i18n'
    ],
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type);
            },
        },
    },
    lintOnSave: false
};
