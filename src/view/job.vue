<template>
  <div id="job">
    <div class="header"></div>
    <div class="depBox">
      <div class="dep" 
        v-for="(item,index) in branchList" 
        :key="index" 
        :class="activeIndex===item.id?'bgOrange':''"
        @click="changeIndex(item.id)"
        >
        {{item.cn_name}}
      </div>
    </div>
    <div class="content">
      <Sidebar class="sidebar" :pose="isVisible ? 'visible': 'hidden'">
        <Item class="item firstItem" >
          <div class="itemHeader">
            <div class="frItem depItem">职位</div>
            <div class="frItem team">部门</div>
            <div class="money frItem">薪资</div>
          </div>
        </Item>
        <Item class="item" v-for="(item,index) in items" :key="index" :class="accordionIndex === item.id?'firstItemMain':''">
          <div class="itemHeader" @click="changeItem(item.id)">
            <div class="depItem">{{item.cn_name}}</div>
            <div class="team">{{item.cn_department}}</div>
            <div class="money">{{item.cn_salary}}</div>
          </div>
          <div 
            class="itemMain"
            :class="accordionIndex ==item.id ?'isshow': 'ishide'"
            :ref="'itemMain'+index"
          >
            <p class="orange claim">任职要求</p>
            <p v-html="item.cn_require_content" class="itemMainCon"></p>
            <p class="orange">工作内容</p>
            <p v-html="item.cn_work_content" class="itemMainCon"></p>
            <div class="itemMainBtn">
              <div class="btn bgOrange" @click="gotoUs(item.id)">
                立刻申请
                
              </div>
            </div>
          </div>
        </Item>
      </Sidebar>
    </div>
  </div>
</template>

<script>
import {getdepartment,getrecruit} from "@/api/home/home"
import posed from 'vue-pose'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      domain:"",
      activeIndex:0,
      accordionIndex:0,
      isVisible:false,
      branchList:[
        {
          cn_name:"市场部",
          en_name:"Market department",
          id:1
        }, 
      ],
      items:[
        {
          cn_department: "",
          cn_name: "",
          cn_require_content: "",
          cn_salary: "",
          cn_work_content: "",
          en_department: "",
          en_name: "",
          en_require_content: "",
          en_salary: "",
          en_work_content: "",
          flag: "",
          id: 1
        }
      ],
    }
  },
  created(){
  

  },
  mounted(){
    this.reset()
    this.$nextTick(()=>{
      window.addEventListener('scroll', this.onScroll)
      this.isVisible = true
      
    })
  },
  computed: {
    ...mapGetters([
      'getTeam',
      'getDep'
    ])
  },
  watch:{
    // getDep(newValue,oldValue){
    //   this.activeIndex = newValue
    //   console.log("dep:2")
    // },
    // getTeam(newValue,oldValue){
    //   this.accordionIndex = newValue
    //   console.log("team:2")
    // },
    // $route(to,from){
    //   if(from.name === 'job'){

    //   }
    // }
  },
  methods:{
    onScroll () {
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      let _windowHeight = document.documentElement.clientHeight || document.body.clientHeight
    },
    gotoUs(id){
      this.$store.commit('setTeam1',id)
      this.$router.push('/us')
    },
    changeIndex(index){
      this.activeIndex = index
      let _obj = {
        id:this.activeIndex
      }
      getrecruit(_obj).then(result=>{
         if(result.status===200){
            this.items = result.data.data
            this.accordionIndex =  this.items[0].id
            setTimeout(()=>{
              let _element = document.querySelector('.isshow')
              this.funTransitionZero()
              this.funTransitionHeight(_element) 
            },0)
         }
      })
      
    },
    changeItem(index){
      this.accordionIndex = index
      setTimeout(()=>{
        let _element = document.querySelector('.isshow')
        this.funTransitionZero()
        this.funTransitionHeight(_element) 
      },50)
       
      
    },
    // 获取高度
    funTransitionHeight(element){
      if (typeof window.getComputedStyle == "undefined") return;
      var height = window.getComputedStyle(element).height;
      element.style.height = "auto";
      var targetHeight = window.getComputedStyle(element).height;
      element.style.height = height;
      element.offsetWidth;
      element.style.height = targetHeight;
    },
    // 改变高度为0
    funTransitionZero(){
      let _arr = document.querySelectorAll('.ishide')
      _arr.forEach(
        (item,index)=>{
          item.style.height  = 0
        }
      )

    },
    reset(){
      getdepartment().then(res=>{
      if(res.status===200){
        this.domain = res.data.domain
        let _base = res.data.data.department
        this.branchList = _base
        if(this.$store.getters.getDep) {
          this.activeIndex = this.$store.getters.getDep
        } else{
          this.activeIndex = this.branchList[0].id
        } 
      }
      }).then(res=>{
        let _obj = {
          id:this.activeIndex
        }
        getrecruit(_obj).then(result=>{
          if(result.status===200){
              this.items = result.data.data
              console.log("team:3")
            if(this.$store.getters.getTeam) {
              this.accordionIndex = this.$store.getters.getTeam
            } else{
              this.accordionIndex = this.items[0].id
            }
            setTimeout(() => {
              let _element = document.querySelector('.isshow')
              this.funTransitionHeight(_element)
            }, 0);
          }
        })
      })
    }
  },
  components: {
    Sidebar: posed.div({
      visible: {
        beforeChildren: true,
        staggerChildren: 100
      },
      hidden: {
        afterChildren: true,
        staggerChildren: 100
      }
    }),
    Item: posed.div({
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 20 }
    })
  }
}
</script>

<style lang='stylus' scoped>
#job
  .header
    height 4.4rem
    background url("../image/job/job_banner.jpg")
    background-position center center
    background-size cover
  .depBox
    padding 0.3rem
    display flex
    flex-wrap wrap
    justify-content space-between
    .dep
      min-width 1.3rem
      height 0.5rem
      background-color #999999
      text-align center
      line-height 0.5rem
      margin-bottom 0.2rem
      font-size 0.22rem
      color #ffffff
  .content
    .sidebar
      padding-bottom 0.8rem
      .item
        border-bottom 1px solid #e8e8e8
        &.firstItem
          color #7e7e7e
          font-size 0.22rem 
        &.firstItemMain
          .itemHeader
            background-color #ff5d22
            color #fff
        .itemHeader
          display flex
          justify-content space-between
          padding 0 0.2rem
          height 0.8rem
          line-height 0.8rem
          .depItem
            min-width 2.4rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            font-size 0.24rem
            font-weight 600
          .team
            min-width 1.6rem
          .money
            min-width 2rem
        .itemMain
          padding 0 0.2rem
          overflow hidden
          transition height .5s ease
          .claim
            margin-top 0.4rem
          .itemMainCon
            margin-bottom 0.5rem
          &.ishide
            height 0 !important
          .itemMainBtn
            margin-bottom 0.4rem
            .btn
              height 0.6rem
              width 4rem
              border-radius 0.08rem
              color #ffffff
              font-size 0.22rem
              line-height 0.6rem
              text-align center
            
          

</style>
