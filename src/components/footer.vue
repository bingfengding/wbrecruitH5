<template>
  <div id="footer">
    <div class="modal" v-show="showModal" @click="showModal=false">
      <div class="codeImg"><img src="../image/code.png" alt=""></div>
    </div>
    <div class="urlBox">
      <div class="itemBox">
        <div class="item" v-for="(item,index) in items" :key="index">
          <p class="big" :class="item.child?'whiteBorder':''" @click="goto(item.url)">{{item.value}}</p>
          <div class="smallBox" v-if="item.child">
            <span class="small" v-for="(text,type) in item.child" :key="type" @click="goto(text.url,text.assort)">
              {{text.value}}
            </span>
          </div>
        </div>
      </div>
      <div class="logoImg" @click="goto('/home')">
        <img src="../image/footer_logo.png" alt="">
      </div>
    </div>
    <div class="incoBox">
      <!-- <a href="weixin://hrwechat1213"> -->
      <a href="javascript:void(0)" @click="showModal=true">
        <div class="wechat"><img src="../image/wechat.png" alt=""></div>
      </a>
      <a href="mqqwpa://im/chat?chat_type=wpa&uin=1607005518&version=1&src_type=web&web_src=oicqzone.com" target="_blank">
      <div class="qq"><img src="../image/qq.png" alt=""></div>
      </a>
      <a href="skype:nletpse@maxoof.net?chat">
        <div class="skype"><img src="../image/skyep.png" alt=""></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal:false,
      items:[
        {
          value:"公司信息",
          url:"/info",
          child:[
            {
              value:"公司愿景和理念",
              url:"/info"
            }
          ],
        },{
          value:"企业背景",
          url:"/back",
        },{
          value:"企业文化",
          url:"/culture",
          child:[
            {
              value:"企业宗旨",
              url:"/culture",
              assort:"purpose"
            },{
              value:"员工活动",
              url:"/culture",
              assort:"activity"
            },{
              value:"福利待遇",
              url:"/culture",
              assort:"welfare"
            },
          ],
        },{
          value:"核心价值",
          url:"/value",
         
        },{
          value:"业务范围",
          url:"/range",
         
        },{
          value:"加入我们",
          url:"/job",
          child:[
            {
              value:"社会招聘",
              url:"/job"
            }
          ],
        },{
          value:"联系我们",
          url:"/us",
          child:[
            {
              value:"联系我们",
              url:"/us"
            }
          ],
        },
      ]
    }
  },
  methods:{
    goto(url,value){
      if(value){
        this.$store.commit('setAssort',value)
        this.$router.push(url)
      }else {
        this.$router.push(url)
      }
    }
  },
  components: {

  }
}
</script>

<style lang='stylus' scoped>
#footer
  height 5.6rem
  width 100%
  background-color #1e2127
  .modal
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background-color rgba(0,0,0,0.6)
    z-index 1000
    display flex
    justify-content center
    align-items center
    .codeImg
      width 2.6rem
      height 4.25rem
      
  img
    width 100%
    height 100%
  .urlBox
    //padding 0.4rem 0.1rem 0 0.2rem
    padding-top 0.4rem
    height 4.6rem
    display flex
    justify-content space-around
    .logoImg
      width 1.7rem
      height 1.72rem
      //margin-left 0.2rem
    .itemBox
      .item
        display flex
        justify-content flex-start
        padding 0.14rem 0
        border-bottom 1px dashed #787a7d
        //min-width 4.66rem
        .big
          color #ffffff
          font-size 0.22rem
          padding-right 0.16rem
          margin-right 0.16rem
          line-height 0.24rem
          &.whiteBorder
            border-right 1px solid #ffffff
        .smallBox
          display flex
          justify-content flex-start
          .small
            color #999
            padding-right 0.08rem
            margin-right 0.08rem
            border-right 1px solid #999
            line-height 0.24rem
            min-width 1rem
            &:last-of-type
              border-right none
              margin-right 0
      
  .incoBox
    height 1rem
    background-color #ffffff
    border-top 0.02rem solid #ccc
    display flex
    justify-content flex-start
    position fixed
    bottom 0
    width 100%
    a
      width (100/3)%
      height 100%
      
    .wechat
      width 100%
      height 100%
      border-right 2px solid #cccccc
      display flex
      justify-content center
      align-items center
      img
        width 0.44rem
        height 0.72rem
    .qq
      width 100%
      height 100%
      border-right 2px solid #cccccc
      display flex
      justify-content center
      align-items center
      img
        width 0.4rem
        height 0.72rem
    .skype
      width 100%
      height 100%
      display flex
      justify-content center
      align-items center
      img
        width 0.54rem
        height 0.74rem
</style>
