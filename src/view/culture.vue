<template>
  <div id="culture">
    <div class="header"></div>
    <div class="main">
      <div class="mainHeader">
        <div class="center" :class="assort==='purpose'?'active':''"
         @click="changeType('purpose')"
        >
          <span>企业宗旨</span>
        </div>
        <div class="line"></div>
          <div class="center" :class="assort==='activity'?'active':''"
           @click="changeType('activity')"
          >
          <span>员工活动</span>
        </div>
        <div class="line"></div>
        <div 
          class="center" 
          :class="assort==='welfare'?'active':''"
          @click="changeType('welfare')"
        >
          <span>福利待遇</span>
        </div>
      </div>
      <purpose v-if="assort==='purpose'"></purpose>
      <activity v-else-if="assort==='activity'"></activity>
      <welfare v-else-if="assort==='welfare'"></welfare>
    </div>
  </div>
</template>
<script>
import activity from "./culture/activity"
import purpose from "./culture/purpose"
import welfare from "./culture/welfare"
export default {
  data () {
    return {
      assort:"purpose",
    }
  },
  mounted(){
    this.assort = this.$store.getters.getAssort
  },
  methods:{
    changeType(value){
      if(this.assort != value){
        this.assort = value
      }
      
    }
  },
  components: {
    activity,
    purpose,
    welfare
  }
}
</script>

<style lang='stylus' scoped>
#culture
  .header
    height 4.4rem
    background url('../image/culture/culture_banner.jpg') no-repeat
    background-position center center
    background-size cover
  .main
    .mainHeader
      font-size 0.32rem
      display flex
      justify-content center
      padding 0.3rem 0
      font-weight 600
      align-items center
      .line
        height 0.36rem
        width 1px
        background-color #b6b6b6
        margin 0 0.5rem
      .center
        display flex
        justify-content center
        span
          display inline-block
          border-bottom 0.04rem solid transparent
          height 0.6rem
        &.active
          span
            border-bottom-color #ff5d22
            color #ff5d22
</style>
