<template>
  <div id="home">
    <div class="header">
      <video ref="bgvideo" loop autoplay muted> 
        <source  src="../image/home/video_bg.mp4" type="video/mp4">
        您的浏览器不支持 video 标签。
      </video>
    </div>
    <features>

    </features>
    <div class="fervor">
      <p class="fervorTop">你的热情是</p>
      <div class="imgBox" ref="fervor">
        <div class="imgCen">
          <div 
            class="animated imgItem" 
            :class="scrolled>baseTop?('fadeInRight '+item.class):''" 
            v-for="(item,index) in selectList" :key="index"
            @click="goto('/job',item.id)"
          >
            <div class="img">
              <img :src="domain+item.noselect_image" alt="">
            </div>
            <div class="itemText">{{item.cn_name}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="upResume">
      <div class="upResumeCen">
        <div class="upResumeTop">
          <p class="topText">拿什么跟你的梦想般配？</p>
          <div class="line"></div>
        </div>
        <div class="upResumeMain">
          高薪是选择，高效是要求；月休8天，起薪无上限；能力是你的最佳筹码，年轻、创造力和激情，是我们赋予你的标签。
        </div>
        <div class="upBtn">
          <div class="btn" @click="goto('/us')">上传简历</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import features from "@/components/features"
import {getdepartment} from "@/api/home/home"
export default {
  data(){
    return {
      domain:"",
      isShow:false,
      scrolled:0,
      baseTop:0,
      selectList:[
        {
          noselect_image:"",
          select_image:"",
          cn_name:"",
          url:"",
          type:"",
          id:1,
          class:""
        }
      ],
    }
  },
  created(){
    getdepartment().then(res=>{
      if(res.status==200){
        if(res.data.code ==1){
          let _base = res.data.data
          this.domain = _base.domain
          console.log(_base)
          let _arr = []
          _arr =  _base.department.map((item,index)=>{
            if(index<10){
              let _index = 'delay-0'+(index)+'s'
              item.class = _index

            } else if(index==10){
              let _index = 'delay-1s'
              item.class = _index
            }
            else{
              let _index = 'delay-'+(index)+'s'
              item.class = _index
    
            }
            return item
          })
            this.selectList = _arr
          }
          
      }
    })
  },
  mounted(){
    this.$nextTick(()=>{
      this.onScroll()
      window.addEventListener('scroll', this.onScroll)
    })
  },
  methods:{
    onScroll () {
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      let _windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      this.scrolled = scrolled
      if(this.$refs.fervor){
        let baseHeight = this.$refs.fervor.offsetTop - _windowHeight
        if(scrolled>baseHeight){
          this.isShow = true
        }else {
          this.isShow = false
        }
      }
    },
    goto(url,id){
      if(id){
        this.$store.commit('setDep',id)
        this.$store.commit('setTeam',null)
      }
      
      this.$router.push(url)
    }
  },
  components: {
    features
  }
}
</script>
<style lang="stylus" scoped>
#home
  padding-bottom 0.6rem
  .header
    height 4.4rem
    display flex
    justify-content center
    align-items center
    background-color #000
    overflow hidden
    video
      min-width 100%
      min-height 100%
      // width 7.5rem
      // height 4.4rem
  .fervor
    overflow hidden
    .fervorTop
      text-align center
      font-size 0.42rem
      color #2c2c2c
      font-weight 600
    .imgBox
      display flex
      justify-content center
      padding 0 0.4rem 1rem 0.4rem
      .imgCen
        width 100%
        display flex
        justify-content flex-start
        flex-wrap wrap
        .imgItem
          width 25%
          display flex
          flex-wrap wrap
          justify-content center
          margin-top 0.4rem
          opacity 0
          .img
            width 1.3rem
            height 1.3rem
          .itemText
            text-align center
            width 100%
            font-size 0.24rem
            padding-top 0.2rem
  .upResume
    padding 0 0.26rem
    .upResumeCen
      display flex
      justify-content center
      flex-wrap wrap
      .upResumeTop
        text-align center
        font-weight 600
        font-size 0.36rem
        line-height 0.84rem
        border-bottom 1px solid #c9c9c9
        position relative
        .line
          position absolute
          bottom -0.03rem
          left 50%
          transform translateX(-50%)
          height 0.05rem
          background-color #c9c9c9
          width 1rem
      .upResumeMain
        width 5.2rem
        font-size 0.22rem
        text-align center
        padding 0.3rem 0
      .upBtn
        .btn
          width 4rem
          height 0.6rem
          background-color #fb7b1d
          border-radius 0.08rem
          color #ffffff
          font-size 0.22rem
          line-height 0.6rem
          text-align center


</style>


