<i18n src="@/locales/index.json"></i18n>
<template>
    <section class="container">
        <!--        <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo"/>-->
        <h1 class="title">
            {{ $t('title') }}
        </h1>
        <hr>
        <!-- v-if="$t"を行わないとthis.$i18nがundefinedになってしまう -->
        <div v-if="rendered" class="localeDetail">
            <div class="localeDetail__title">
                Locale 情報詳細<br>
                {{ getLocaleData }}
            </div>
        </div>
        <div>
            {{  this.$route.params }}
        </div>
        <hr>
        <div class="localeSwitchBox">
            <div class="localeSwitchBox__title">
                言語の切り替え
            </div>
            <div>
                <button @click="switchLocale('ja')">日本語</button>
            </div>
            <div>
                <button @click="switchLocale('en')">英語</button>
            </div>
        </div>
        <hr>
        <div class="localeSwitchTestList">
            <div :style="{ 'margin-bottom' : '14px' }">
                page遷移でのlocale反映テスト
            </div>
            <ul>
                <li>
                    <div class="localeSwitchTestList__listTitle">
                        <a :href="'/ramen'">a タグでの遷移</a>
                    </div>
                    <div class="localeSwitchTestList__description">
                        a タグで遷移した場合は、「/en/ramen」とURLが変わり設定言語情報は維持される
                    </div>
                </li>
                <li>
                    <div class="localeSwitchTestList__listTitle">
                        <nuxt-link :to="`/ramen`">ただの nuxt-link</nuxt-link>
                    </div>
                    <div class="localeSwitchTestList__description">
                        「nuxt-link :to="`/ramen`"」の場合は設定言語情報は維持されない
                    </div>
                </li>
                <li>
                    <div class="localeSwitchTestList__listTitle">
                        <nuxt-link :to="localePath('/ramen', 'en')">localePathを設定したnuxt-link</nuxt-link>
                    </div>
                    <div class="localeSwitchTestList__description">
                        「nuxt-link :to="localePath('/ramen', 'en')」の場合は設定言語情報は維持される
                    </div>
                </li>
                <li @click="switchLocaleHandle">
                    <button class="localeSwitchTestList__listTitle">
                        @click="switchLocaleHandleの場合
                    </button>
                    <div class="localeSwitchTestList__description">
                        「this.$router.push(`/ramen`);」は維持されず、「this.$router.push(this.localePath(`/ramen`));」だと維持される
                    </div>
                </li>
            </ul>
        </div>
        <hr>
        <div>
            ユーザーリスト
        </div>
        <ul class="users">
            <li v-for="(user, index) in users" :key="index" class="user">
                <nuxt-link :to="{ name: 'id', params: { id: index }}">
                    {{ user.name }}
                </nuxt-link>
            </li>
        </ul>
    </section>
</template>

<script>
    import axios from '~/plugins/axios';
    import initialize from '@/mixins/initialize';

    export default {
        mixins: [
            initialize
        ],
        data() {
           return {
               users: null,
               rendered: false
           }
        },
        // createdを使うとなぜかコンパイルでおかしくなる
        mounted() {
            console.log('execute after mounting.');

            // mountedからアクセスするときはmethodsの中にfunctionがないといけない
            this.getUserData();
        },
        methods: {
            async getUserData() {
                let {data} = await axios.get('/api/users');
                return {users: data};
            },
            switchLocale(language) {
                // SPAモードでの切り替え
                this.$i18n.locale = language;
                this.$i18n.fallbackLocale = language;

                // クッキー情報をブラウザにセット
                this.setLocaleCookieData(language);
            },
            switchLocaleHandle() {
                // router.pushの場合はthis.localePathを設定することによってlocale情報つきで遷移
                // localePathを設定しないと遷移先でlocaleが反映されない
                // this.$router.push(this.localePath(`/ramen`));
                this.$router.push(`/ramen`);
            },
        },
        computed: {
        },
        created() {
            if (!process.client) {
                return;
            }

            console.log(111);
            console.log(this.$route.params);

            this.rendered = true;
        },
        async asyncData({ app }) {
            let {data} = await axios.get('/api/users');

            return {users: data};
        },
        head() {
            return {
                title: 'Users',
            };
        },
    };
</script>

<!-- scopedは現在のコンポーネントにのみ適用されカプセル化させる -->
<style lang="scss" scoped>
    .title {
        margin: 30px 0;
        border: 1px solid black;
    }

    .users {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .user {
        margin: 10px 0;
    }

    .localeSwitchTestList {
        li {
            display: block;
            margin-bottom: 14px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid #b46e3f;
        }
    }

    .localeSwitchTestList__listTitle {
        margin-bottom: 14px;
    }

    .localeSwitchTestList__description {
        text-align: left;
        font-size: 12px;
    }
</style>
