<template>
  <div id="purpose">
    <div class="title">
      <p>紐林科集團旨在构建未来的全球商业格局，在实现企业战略目标的进程中，始终贯彻开拓进取和追求卓越的企业精神。</p>
      <p>在激烈的市场竞争中抢占制高点、在反思中实现超越自我、在学习中实现超越平庸，让品牌在百舸争流的市场环境中不断脱颖而出。</p>
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
          image:require('../../image/culture/purpose/1.jpg'),
          title:"以人为本",
          text:[
            {
              value:"为员工建立舒适的工作环境，促进“开放、合作、分享、责任”的人文环境，不断提升员工的工作满意度。"
            }
          ]
        },{
          image:require('../../image/culture/purpose/2.jpg'),
          title:"高效创新",
          text:[
            {
              value:"迎接变化，勇于创新"
            }
          ]
        },{
          image:require('../../image/culture/purpose/3.jpg'),
          title:"诚信做人",
          text:[
            {
              value:"诚实正直，言行坦荡，表里如一，通过正确的渠道和流程，准确表达自己的观点；表达批评意见时对同事能提出相应建议，直言不讳。不传播未经证实的消息，不在背后不负责任地议论事和人，并能正面引导，对于任何意见和反馈“有则改之，无则加勉”。"
            },{
              value:"勇于承认错误，敢于承担责任，并及时改正，对损害公司利益的不诚信行为正确有效地制止。"
            },
          ]
        },
        {
          image:require('../../image/culture/purpose/4.jpg'),
          title:"互利共赢",
          text:[
            {
              value:"高效的团队合作，将公司利益与员工利益紧密结合在一起，实现双赢, 共同应对, 互惠互利。"
            }
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
#purpose
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
