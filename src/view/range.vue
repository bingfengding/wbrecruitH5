<template>
  <div id="range">
    <div class="header"></div>
    <div class="title">
      <p>目前，纽林科科技有限公司的业务涵盖互动娱乐、移动互联产品研发、网络媒体等，是亚洲领先的综合型互联网公司之一。</p>
    </div>
    <div class="items">
      <div class="item" v-for="(item,index) in items" :key="index">
        <div class="imgBox" :style="'background:url('+ item.image +')'">
        </div>
        <div class="itemsTitle">
          {{item.title}}
        </div>
        <div class="itemTextBox">
          <div class="text" v-for="(value,type) in item.text" :key="type">
            {{value.value}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items:[
        {
          image:require('../image/range/1.jpg'),
          title:"互动娱乐事业",
          text:[
            {
              value:"自主研发多款在线游戏，在互动娱乐业务方面始终保持市场领先地位，更秉持“匠心”和“创新”的理念，为用户提供各类优质娱乐服务。"
            }
          ]
        },{
          image:require('../image/range/2.jpg'),
          title:"移动互联网产品",
          text:[
            {
              value:"自主研发的移动互联游戏客户端，以用户的价值为依归，致力于提供最优质的用户体验。"
            },
          ]
        },
        {
          image:require('../image/range/3.jpg'),
          title:"网络媒体",
          text:[
            {
              value:"最佳新媒体，顶级赛事合作伙伴，只生产最优质的内容。"
            },
          ]
        }
      ]
    }
  },
  components: {

    }
}
</script>

<style lang='stylus' scoped>
#range
  .header
    height 4.4rem
    background url('../image/range/range_banner.jpg') no-repeat
    background-position center center
    background-size cover
  .title
    padding 0.3rem 0
    display flex
    justify-content center
    p
      font-size 0.22rem
      width 6.9rem
  .items
    margin 0.1rem 0.3rem 0 0.3rem
    .item
      padding-bottom 0.2rem
      .itemsTitle
        font-weight 600
        padding 0.3rem 0.2rem 0.16rem 0.2rem
        font-size 0.3rem
      .imgBox
        width 6.9rem
        height 3rem
        background-size cover !important
        background-position center center !important
      .itemTextBox
        font-size 0.22rem
        padding 0 0.2rem
        .text
          padding-bottom 0.3rem

      
    
    


 
</style>
