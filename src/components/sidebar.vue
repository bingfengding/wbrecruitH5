<template>
  <div id="sidebar">
    <div @click="toggle" :class="isShow?'cross':''" class="svgMenu">
      <svg viewBox="0 0 800 600">
        <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
        <path d="M300,320 L540,320" id="middle"></path>
        <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
      </svg>
    </div>
    <div class="itemBox">
    <Sidebar class="sidebar" :pose="isShow ? 'visible': 'hidden'">
      <div class="triangle"></div>
      <Item class="item job big" :class="routerName === 'job'?'orange':''" @click.native="goto('/job')"><span>招贤纳士</span></Item>
      <Item class="item about big"><span>关于我们</span></Item>
      <Item class="item baseItem" v-for="(item,index) in items" :key="index" :class="routerName === item.name?'orange':''" @click.native="goto(item.url)">
        <span>{{item.text}}</span>
      </Item>
      <Item class="item tell big" :class="routerName === 'us'?'orange':''" @click.native="goto('/us')"><span>联系我们</span></Item>
    </Sidebar>
    
    </div>
    <div class="model" @click="change" :class="isShow?'showModel':''"></div>
  </div>
</template>

<script>
import posed from "vue-pose"
export default {
  data () {
    return {
      routerName:"home",
      isShow:false,
      items: [
        {
          text:"企业文化",
          url:"/culture",
          name:'culture'
        },
        {
          text:"公司信息",
          url:"/info",
          name:"info"
        },
        {
          text:"企业背景",
          url:"/back",
          name:"back"
        },
        {
          text:"核心价值",
          url:"/value",
          name:"value"
        },
        {
          text:"业务范围",
          url:"/range",
          name:"range"
        },
        
      ]
    }
  },
  watch:{
    $route(to,from){
      this.routerName = to.name
    }
  },
  methods:{
    toggle(){
      this.isShow = !this.isShow
    },
    change(){
      this.isShow = false
    },
    goto(url){
      this.$router.push(url)
    }
  },
  components: {
    Sidebar: posed.div({
      visible: {
        x: 0,
        beforeChildren: true,
        staggerChildren: 50
      },
      hidden: {
        x: '120%',
        afterChildren: true,
        staggerChildren: 50
      }
    }),
    Item: posed.div({
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 10 }
    })
  }
}
</script>

<style lang='stylus' scoped>
easeInOutSine = cubic-bezier(0.445, 0.050, 0.550, 0.950)
easeOutBack   = cubic-bezier(0.250,-0.250, 0.750, 1.250)
easing = easeOutBack
duration = .5s
dash-offset-cross = 0px
cross-length = 950px
#sidebar
  position fixed
  right -0.16rem
  top -0.1rem
  z-index 1000
  .model
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    display none
    z-index 1
    &.showModel
      display block
  .itemBox
    position fixed
    right 0.2rem
    width 2.5rem
    top 1.2rem
    color #333
    z-index 10
    height 0
    .sidebar
      padding 0.1rem 0.2rem 0 0.2rem
      transform translateX(120%)
      height 5rem
      background-color #fff
      border-radius 0.1rem
      box-shadow 0 0.04rem 0.04rem rgba(0,0,0,0.2)
      position relative
      .triangle
        background-color #ffffff
        width 0.2rem
        height 0.2rem 
        position absolute
        top -0.1rem
        right 0.3rem
        transform rotateZ(45deg)
      .item
        padding-left 0.45rem
        &.job
          border-bottom 1px solid #cccccc
        &.big
          font-size 0.3rem
          line-height 0.7rem
          font-weight 600
        &.about
          margin-top 0.1rem
          line-height 0.6rem
          margin-bottom 0.06rem
          span
            display inline-block
            border-bottom 1px solid #ccc
        &.baseItem
          height 0.5rem
          line-height 0.5rem
        &.tell
          border-top 1px solid #ccc
  .svgMenu
    position absolute
    top 0
    right 0
    width 1.6rem
    height 1.2rem
    text-align center
    z-index 2000
  svg
    width 1.6rem
    height 1.2rem
    cursor pointer
    transform translate3d(0,0,0)
  path
    fill none
    transition stroke-dashoffset duration easing, stroke-dasharray duration easing
    stroke-width 0.4rem
    stroke-linecap round
    stroke #313131
    stroke-dashoffset 0px
    &#top
    &#bottom
      stroke-dasharray 240px cross-length
    &#middle
      stroke-dasharray 240px 240px

  .cross
    path
      &#top
      &#bottom
        stroke-dashoffset -650px
        stroke-dashoffset -650px
      &#middle
        stroke-dashoffset -115px
        stroke-dasharray 1px 220px

</style>
