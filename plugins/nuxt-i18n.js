import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default ({ app }) => {
    const cookieLocale = app.$cookies.get('i18nSelectedLanguage') || 'ja';
    app.i18n.setLocale(cookieLocale);
};
