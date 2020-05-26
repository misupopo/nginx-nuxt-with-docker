<template>
<div id="ramen-list">
  <ul>
    <li v-for="item in ramenList" v-bind:key="item.name">
      {{item.name}}</li>
  </ul>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      ramenList: [{ name: 'しょうゆ' }, { name: 'とんこつ' }]
    }
  }
}
</script>
