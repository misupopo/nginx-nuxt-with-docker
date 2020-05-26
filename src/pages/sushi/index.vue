<template>
<div id="sushi-list">
  <ul>
    <li v-for="item in sushiList" v-bind:key="item.name">
      {{item.name}}: {{item.price}}円</li>
  </ul>
</div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data: function() {
    return {
      sushiList: [{ name: 'まぐろ' }, { name: 'かじき' }]
    }
  },
  asyncData(context) {
    return axios.get('/api/sushi').then(res => {
      console.log(res)
      return { sushiList: res.data }
    })
  }
}
</script>
