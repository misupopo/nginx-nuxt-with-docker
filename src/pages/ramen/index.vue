<i18n src="@/locales/index.json"></i18n>
<template>
    <section>
        <div>
            {{ $t('ramen') }}
        </div>
        <h1>{{ message }}</h1>
        <div>{{ getParams }}</div>
        <ramen-list/>
    </section>
</template>

<script>
    import ramenList from '@/components/RamenList';
    import initialize from '@/mixins/initialize';

    export default {
        mixins: [
            initialize
        ],
        data: function () {
            return {
                message: 'ラーメンリスト'
            }
        },
        computed: {
            getParams() {
                return this.$route.query;
            }
        },
        components: {ramenList}
    }
</script>
