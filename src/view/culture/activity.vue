<template>
  <div id="activity">
    <div class="title">
      <p>紐林科集團奉行“活动抓人心 成长造宇宙”的管理原则，以追求完美和持续发展为目标，坚信只有快乐生活，才能高效工作，员工的成长终将为集团创造“大宇宙”！</p>
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
          image:require('../../image/culture/activity/1.jpg'),
          title:"员工培训",
          text:[
            {
              value:"松下幸之助曾经说过：“一个天才的企业家总是不失时机地把对职员的培养和训练摆上重要的议事日程。”"
            },{
              value:"紐林科集團一直延续着世界前沿企业的战略发展方针，定期为员工举行技能培训课程，强化组织核心能力，增加企业竞争力。"
            },
          ]
        },{
          image:require('../../image/culture/activity/2.jpg'),
          title:"春节晚会",
          text:[
            {
              value:"紐林科集團自创立以来，每年春节全体员工欢聚一堂，喜迎新春佳节，一起回味走过的365天的辉煌，展望集团美好未来。"
            },{
              value:"舞步的绚丽、情歌的纯真、爆笑的小品等都是全体员工精彩纷呈的体现。"
            }
          ]
        },{
          image:require('../../image/culture/activity/3.jpg'),
          title:"品牌文化日",
          text:[
            {
              value:"紐林科集團融合了世界各国文化，品牌文化日旨在为企业增加了一盏引路灯，汇集来自五湖四海的兄弟姐妹步入文化交流的舞台，促使企业文化星光璀璨。"
            },{
              value:"相信自己，你可以侃侃而谈，也可以虚心受教！"
            },
          ]
        },
        {
          image:require('../../image/culture/activity/4.jpg'),
          title:"主题派对",
          text:[
            {
              value:"紐林科集團主题派对是为全体员工“释放激情”的大型娱乐活动，狂欢是我们给予员工最好的解压，为今天喝彩，为明天加油，也为梦想点灯！"
            }
          ]
        },{
          image:require('../../image/culture/activity/5.jpg'),
          title:"企业达人秀",
          text:[
            {
              value:"紐林科集團达人秀活动是业界首创，旨在挖掘员工身上的每一处闪光点，使得企业整体自信度飙升。作为紐林科集团的一员，"
            },{
              value:"你可以在工作中出类拔萃，也可以在舞台上与众不同！"
            }
          ]
        },{
          image:require('../../image/culture/activity/6.jpg'),
          title:"共享团建日",
          text:[
            {
              value:"紐林科集團团建日，鼓励员工为身体放假，体味平静生活的放松。旨在增进员工之间的沟通交流了解，增强公司凝聚力和团队合作精神，进一步推动公司企业文化建设。"
            },{
              value:"这一天，也许一起踏青，也许共进晚餐！"
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
#activity
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
          padding-bottom 0.1rem

      
    
    


 
</style>
