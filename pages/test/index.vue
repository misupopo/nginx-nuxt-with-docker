<template>
    <section>
        <h1>{{message}}</h1>
        <ramen-list/>
    </section>
</template>

<script>
    import ramenList from '@/components/RamenList'
    export default {
        data: function() {
            return {
                message: 'ラーメンリスト'
            }
        },
        components: { ramenList }
    }
</script>
