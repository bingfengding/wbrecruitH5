<template>
  <div id="header">
    <div class="img" @click="goto('/home')">
      <img src="../image/logo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        
      }
    },
    methods:{
      goto(url){
        this.$router.push(url)
      }
    },
  components: {

    }
}
</script>

<style lang='stylus' scoped>
#header
  width 100%
  height 1rem
  background-color #ffffff
  position fixed
  top 0
  padding-top 0.18rem
  padding-left 0.2rem
  z-index 1000
  .img
    width 2.87rem
    height 0.64rem
    img
      width 100%
      height 100%

</style>
