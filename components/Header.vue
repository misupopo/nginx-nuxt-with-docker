<template>
    <header>
        <nav>
            <div class="navWrapper">
                <div class="headerImageBox">
                    <img src="~assets/img/logo.png" alt="Title" class="logo"/>
                </div>
                <div class="serchBox">
                    <input v-model="message" placeholder="edit me" @blur="focusOut()">
                </div>
                <div class="headerImageBox">
                    <img src="~assets/img/logo.png" alt="Title" class="logo"/>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    import axios from '~/plugins/axios';

    export default {
        data: () => {
            return {
                message: '',
            };
        },
        methods: {
            // フォーカスが外れた時inputデータを取得する
            async focusOut() {
                console.log(this.message);

                let {data} = await axios.post('/api/users');



            },
        },
    };
</script>

<style lang="scss" scoped>
    @import "../assets/sass/_variables.scss";

    header {
        background: $header-color;

        nav {
            padding: 8px;

            .navWrapper {
                display: flex;
                justify-content: space-between;
            }
        }

        .headerImageBox {
            img {
                display: inline-block;
                width: 120px;
            }
        }
    }
</style>
