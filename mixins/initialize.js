

export default {
    async created() {
        if (!process.client) {
            return;
        }

        // これだけだとURLがにenがついてる場合、画面の表示は英語のままになる
        // this.$i18n.setLocale = 'ja';
        // this.$i18n.fallbackLocale = 'ja';
    },
    computed: {
        getLocaleData() {
            if (!process.client) {
                return;
            }

            if (!this.$i18n) {
                return;
            }

            return this.$i18n.locale;
        }
    },
    methods: {
        setLocaleCookieData(language) {
            this.$cookies.set('i18nSelectedLanguage', language, {
                path: '/',
                maxAge: 60 * 60 * 24 * 365
            });
        },
        getLocaleCookieData() {
            return this.$cookies.get('i18nSelectedLanguage');
        }
    }
}
