<template>
  <div id="bottom">
    <div class="header">
      <div class="heaItem" :class="activeIndex===0 ? 'orange':''"  @click="activeIndex=0">
        <div class="imgBox">
          <img src="../image/bottom/2.png" alt="">
          <div class="model"></div>
          </div>
        <div class="text">福利待遇</div>
      </div>
      <div class="heaItem" :class="activeIndex===1 ? 'orange':''" @click="activeIndex=1">
        <div class="imgBox"><img src="../image/bottom/3.png" alt="">
        <div class="model"></div>
        </div>
        <div class="text">员工活动</div>
      </div>
      <div class="heaItem" :class="activeIndex===2 ? 'orange':''"  @click="activeIndex=2">
        <div class="imgBox"><img src="../image/bottom/4.png" alt=""><div class="model"></div></div>
        <div class="text">企业宗旨</div>
      </div>
    </div>
    <div class="main">
      <div class="triangle">
        <div class="triangleItem">
          <div class="small"  v-show="activeIndex ==0"></div>
        </div>
        <div class="triangleItem">
          <div class="small"  v-show="activeIndex ==1"></div>
        </div>
        <div class="triangleItem">
          <div class="small"  v-show="activeIndex ==2"></div>
        </div>
      </div>
      <div class="valueBox" v-if="activeIndex===0">
        <div class="item" v-for="(item,index) in items1" :key="index" :style="'backgroundImage:url('+item.image+')'">
          <p class="itemTitle">
            {{item.title}}
          </p>
          <div class="textBox">
            <p class="text" v-for="(value,type) in item.text" :key="type">
              {{value.value}}
            </p>
          </div>
        </div>
      </div>
      <div class="valueBox" v-else-if="activeIndex===1">
        <div class="item" v-for="(item,index) in items2" :key="index" :style="'backgroundImage:url('+item.image+')'">
          <p class="itemTitle">
            {{item.title}}
          </p>
          <div class="textBox">
            <p class="text" v-for="(value,type) in item.text" :key="type">
              {{value.value}}
            </p>
          </div>
        </div>
      </div>
      <div class="valueBox" v-else-if="activeIndex===2">
        <div class="item" v-for="(item,index) in items3" :key="index" :style="'backgroundImage:url('+item.image+')'">
          <p class="itemTitle">
            {{item.title}}
          </p>
          <div class="textBox">
            <p class="text" v-for="(value,type) in item.text" :key="type">
              {{value.value}}
            </p>
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
      activeIndex:0,
      items1:[
      {
        image:require("../image/back/welfare/1.jpg"),
        title:"高薪选择",
        text:[{
          value:"高薪是选择，高效是要求；月休8天，起薪无上限；能力是你的最佳筹码，年轻、创造力和激情，是我们赋予你的标签。"
        }]
      },{
        image:require("../image/back/welfare/2.jpg"),
        title:"智创未来",
        text:[{
          value:"阶梯式薪资架构，助你步步高升；晋升空间无限大，新世界由你造；你想要的一切，从来虚位以待，终将如期而至。"
        }]
      },{
        image:require("../image/back/welfare/3.jpg"),
        title:"工作环境",
        text:[{
          value:"紐林科集團始终坚信：快乐的员工才能成为更好的员工；我们拥有能够安放员工心情的创新办公室，鲜活的颜色和轻松的氛围以及可以享受曼妙午后的“偷懒区”等，都是我们炫耀的资本。"
        }]
      },{
        image:require("../image/back/welfare/4.jpg"),
        title:"住宿环境",
        text:[{
          value:"紐林科集團始终希望：让下班成为员工的解放宣言；作为紐林科的职员之一，你将居住于城市中心的高级白领公寓，装修堪比星际酒店，脏乱差并不存在，心旷神怡才是标配。"
        }]
      },
    ],
    items2:[
      {
        image:require("../image/back/activity/1.jpg"),
        title:"员工培训",
        text:[{
          value:"松下幸之助曾经说过：“一个天才的企业家总是不失时机地把对职员的培养和训练摆上重要的议事日程。”"
        },{
          value:"紐林科集團一直延续着世界前沿企业的战略发展方针，定期为员工举行技能培训课程，强化组织核心能力，增加企业竞争力。"
        },
        ]
      },{
        image:require("../image/back/activity/2.jpg"),
        title:"春节晚会",
        text:[{
          value:"紐林科集團自创立以来，每年春节全体员工欢聚一堂，喜迎新春佳节，一起回味走过的365天的辉煌，展望集团美好未来。"
        },{
          value:"舞步的绚丽、情歌的纯真、爆笑的小品等都是全体员工精彩纷呈的体现。"
        }]
      },{
        image:require("../image/back/activity/3.jpg"),
        title:"品牌文化日",
        text:[{
          value:"紐林科集團融合了世界各国文化，品牌文化日旨在为企业增加了一盏引路灯，汇集来自五湖四海的兄弟姐妹步入文化交流的舞台，促使企业文化星光璀璨。"
        },{
          value:"相信自己，你可以侃侃而谈，也可以虚心受教！"
        }]
      },{
        image:require("../image/back/activity/4.jpg"),
        title:"主题派对",
        text:[{
          value:"紐林科集團主题派对是为全体员工“释放激情”的大型娱乐活动，狂欢是我们给予员工最好的解压，为今天喝彩，为明天加油，也为梦想点灯！"
        }]
      },{
        image:require("../image/back/activity/5.jpg"),
        title:"企业达人秀",
        text:[{
          value:"紐林科集團达人秀活动是业界首创，旨在挖掘员工身上的每一处闪光点，使得企业整体自信度飙升。作为紐林科集团的一员。"
        },{
          value:"你可以在工作中出类拔萃，也可以在舞台上与众不同！"
        }]
      },{
        image:require("../image/back/activity/6.jpg"),
        title:"共享团建日",
        text:[{
          value:"紐林科集團团建日，鼓励员工为身体放假，体味平静生活的放松。旨在增进员工之间的沟通交流了解，增强公司凝聚力和团队合作精神，进一步推动公司企业文化建设。"
        },{
          value:"这一天，也许一起踏青，也许共进晚餐！"
        }]
      },
    ],items3:[
      {
        image:require("../image/back/purpose/1.jpg"),
        title:"以人为本",
        text:[{
          value:"为员工建立舒适的工作环境，促进“开放、合作、分享、责任”的人文环境，不断提升员工的工作满意度。"
        },
        ]
      },{
        image:require("../image/back/purpose/2.jpg"),
        title:"高效创新",
        text:[{
          value:"迎接变化，勇于创新"
        }]
      },{
        image:require("../image/back/purpose/3.jpg"),
        title:"诚信做人",
        text:[{
          value:"诚实正直，言行坦荡，表里如一，通过正确的渠道和流程，准确表达自己的观点；表达批评意见时对同事能提出相应建议，直言不讳。不传播未经证实的消息，不在背后不负责任地议论事和人，并能正面引导，对于任何意见和反馈“有则改之，无则加勉”。"
        },{
          value:"勇于承认错误，敢于承担责任，并及时改正，对损害公司利益的不诚信行为正确有效地制止。"
        }]
      },{
        image:require("../image/back/purpose/4.jpg"),
        title:"互利共赢",
        text:[{
          value:"高效的团队合作，将公司利益与员工利益紧密结合在一起，实现双赢, 共同应对, 互惠互利。"
        }]
      }
    ],
  
    }
  },
  components: {
  }
}
</script>

<style lang='stylus' scoped>
#bottom
  padding 0 0.3rem
  .header
    display flex
    justify-content space-between
    padding-bottom 0.2rem
    .heaItem
      margin 0 0.04rem
      .imgBox
        width 2.2rem
        height 2rem
        
        position relative
        border-radius 0.2rem
        overflow hidden
        img
          width 100%
          height 100%
        .model
          position absolute
          top 0
          left 0
          right 0
          bottom 0
          background-color rgba(0,0,0,0.5)
          opacity 1
      .text
        text-align center
        font-size 0.24rem
        line-height 0.56rem
      &.orange
        .model
          opacity 0
  .main
    border-top 0.1rem solid #ff5d22
    padding-bottom 0.4rem
    position relative
    .triangle
      display flex
      justify-content space-around
      position absolute
      height 0.2rem
      top -0.3rem
      overflow hidden
      width 100%
      .triangleItem
        width 1.6rem
        display flex
        justify-content center
        .small
          width 0.3rem
          height 0.3rem
          background-color #ff5d22
          transform rotateZ(45deg)
          position relative
          top 0.1rem
    .valueBox
      .item
        background-repeat no-repeat
        background-position 0 0.2rem
        background-size 1rem 1rem
        min-height 1.4rem
        padding 0.2rem 0 0.1rem 1.2rem
        border-bottom 1px solid #d9d9d9
        .itemTitle
          font-size 0.22rem
          font-weight 600
          padding-bottom 0.04rem
        .textBox
          color #666
          .text
            padding-bottom 0.1rem
</style>
