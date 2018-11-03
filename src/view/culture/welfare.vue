<template>
  <div id="welfare">
    <div class="title">
      <p>高薪是选择，高效是要求；月休8天，起薪无上限；能力是你的最佳筹码，年轻、创造力和激情，是我们赋予你的标签。</p>
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
          image:require('../../image/culture/welfare/1.jpg'),
          title:"高薪选择",
          text:[
            {
              value:"高薪是选择，高效是要求；"
            },{
              value:"月休8天，起薪无上限；"
            },{
              value:"能力是你的最佳筹码，年轻、创造力和激情，是我们赋予你的标签。"
            }
          ]
        },{
          image:require('../../image/culture/welfare/2.jpg'),
          title:"智创未来",
          text:[
            {
              value:"阶梯式薪资架构，助你步步高升"
            },{
              value:"晋升空间无限大，新世界由你造"
            },{
              value:"你想要的一切，从来虚位以待，终将如期而至"
            },
          ]
        },{
          image:require('../../image/culture/welfare/3.jpg'),
          title:"工作环境",
          text:[
            {
              value:"紐林科集團始终坚信：快乐的员工才能成为更好的员工！"
            },{
              value:"我们拥有能够安放员工心情的创新办公室，鲜活的颜色和轻松的氛围，以及可以享受曼妙午后的“偷懒区”等，都是我们炫耀的资本。"
            },
          ]
        },
        {
          image:require('../../image/culture/welfare/4.jpg'),
          title:"住宿环境",
          text:[
            {
              value:"紐林科集團始终希望：让下班成为员工的解放宣言"
            },{
              value:"作为紐林科的职员之一，你将居住于城市中心的高级白领公寓，装修堪比星际酒店，脏乱差并不存在，心旷神怡才是标配"
            },
          ]
        }, {
          image:require('../../image/culture/welfare/5.jpg'),
          title:"员工福利",
          text:[
            {
              value:"紐林科集團始终希望员工：在工作和生活中都能健康快乐！"
            },{
              value:"加入紐林科集團，你将拥有：20天带薪年假、13薪、年终奖金、生日礼金、月团建费用、节日红包等。"
            },{
              value:"我们知道每个人都是独一无二的，因此我们提供的待遇和福利也会根据员工的需求和反馈而不断变化和调整。"
            },
          ]
        },
      ]
    }
  },
  components: {

    }
}
</script>

<style lang='stylus' scoped>
#welfare
  .title
    display flex
    align-items center
    justify-content center
    flex-wrap wrap
    padding-bottom 0.2rem
    p
      padding-bottom 0.3rem
      font-size 0.22rem
      width 5.4rem
      text-align center
  .items
    padding 0 0.25rem
    .item
      padding-bottom 0.2rem
      .itemsTitle
        font-weight 600
        padding 0.3rem 0.2rem 0.16rem 0.2rem
        font-size 0.3rem
      .imgBox
        width 7rem
        height 3.5rem
        background-size cover !important
        background-position center center !important
      .itemTextBox
        font-size 0.22rem
        padding 0 0.2rem
        .text
          padding-bottom 0.3rem

      
    
    


 
</style>
