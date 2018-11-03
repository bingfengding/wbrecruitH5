<template>
  <div id="features">
    <div class="header">
      <span class="left">特色工作</span>
      <span class="right" @click="goto('/job')"><i>查看更多工作</i><img src="../image/toall.png" alt=""></span>
    </div>
    <div class="workBox">
      <Sidebar class="work" :pose="isShow ? 'visible': 'hidden'" ref="featuresSidebar">
        <div class="item baseItem">
          <span class="team">职位</span>
          <span class="dep">部门</span>
          <span class="money">薪资</span>
        </div>
        <Item class="item" 
          v-for="(item,index) in items" 
          :key="index"
          @click.native="goto('/job',item.department_id,item.id)"
        >
          <span class="team">{{item.cn_name}}</span>
          <span class="dep">{{item.cn_department}}</span>
          
          <span class="money">{{item.cn_salary}}</span>
        </Item>
      </Sidebar>
    </div>
  </div>
</template>
<script>
import posed from "vue-pose"
import {getrecruit} from '@/api/home/home'
export default {
  data () {
    return {
      isShow:false,
      items:[
        {
          id:1,
          cn_department:"",
          cn_name:"",
          cn_salary:"",
          department_id:1
        }
      ]
    }
  },
  created(){
    getrecruit().then(res=>{

      if(res.status ===200){

        if(res.data.code===1){
          let _base = []
          let _len = res.data.data.length
          if(_len<=8){
            _base = res.data.data
          }else{
            _base = res.data.data.slice(0,8)
          }
          this.items = _base
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
   
      if(this.$refs.featuresSidebar){
        let baseHeight = this.$refs.featuresSidebar.$el.offsetTop - _windowHeight
      
        if(scrolled>baseHeight){
          this.isShow = true
        }else {
          this.isShow = false
        }

        
      }
  
    },
    goto(url,dep,team){
      this.$store.commit('setDep',dep)
      this.$store.commit('setTeam',team)
      this.$router.push(url)
    }
  },
  components: {
    Sidebar: posed.div({
      visible: {
        beforeChildren: true,
        staggerChildren: 50
      },
      hidden: {
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
#features
  padding-bottom 0.6rem
  .header
    height 0.8rem
    line-height 0.8rem
    background-color #1c1c1c
    color #ffffff
    display flex
    justify-content space-between
    padding 0 0.2rem
    align-items center
    .left
      font-weight 600
      font-size 0.36rem

    .right
      display flex
      justify-content flex-start
      align-items center
      i
        margin-right 0.1rem
      img
        width 0.2rem
        height 0.22rem
  .workBox
    .work
      .item
        display flex
        justify-content space-between
        padding 0 0.2rem
        border-bottom 1px solid #cccccc
        &.baseItem
          color #7e7e7e
          border-bottom none
          padding-top 0.3rem
          span
            height 0.4rem
            line-height 0.4rem
        span
          height 0.74rem
          line-height 0.74rem
          display inline-block
        .team
          font-size 0.24rem
          font-weight 600
          min-width 2rem
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
        .dep
          min-width 1rem
        .money
          min-width 1.6rem

</style>
