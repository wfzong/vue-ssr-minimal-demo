<template>
  <div>
    <h3>文章列表</h3>
    <div class="list" v-for="i in list">
      <router-link :to="{path:'/item/'+i.id}">{{i.title}}</router-link>
      </div>
  </div>
</template>
<script>
export default {
  asyncData ({store, route}){
    return store.dispatch('fetchList')
  },
  computed: {
    list () {
      return this.$store.state.list
    }
  },
  data(){
    return {
      name:'wfz'
    }
  }
}
</script>