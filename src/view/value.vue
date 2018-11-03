<template>
  <div id="value">
    <div class="header"></div>
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
          image:require('../image/value/1.jpg'),
          title:"团队合作",
          text:[
            {
              value:"专业优秀的团队，一触即发的响应;"
            }
          ]
        },{
          image:require('../image/value/2.jpg'),
          title:"客户第一",
          text:[
            {
              value:"第一是客户利益，第二是员工利益；"
            },
          ]
        },{
          image:require('../image/value/3.jpg'),
          title:"拥抱变化",
          text:[
            {
              value:"创造是指想新的，创新是指做新的；"
            }
          ]
        },
        {
          image:require('../image/value/4.jpg'),
          title:"互利共赢",
          text:[
            {
              value:"共同发展的意识，缔造双赢的目标；"
            }
          ]
        }, {
          image:require('../image/value/5.jpg'),
          title:"诚信务实",
          text:[
            {
              value:"待人处事的真诚，务实创新的精神；"
            },
          ]
        },{
          image:require('../image/value/6.jpg'),
          title:"激情敬业",
          text:[
            {
              value:"洞察敏锐的意识，谦虚严谨的态度。"
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
#value
  .header
    height 4.4rem
    background url('../image/value/value_banner.jpg') no-repeat
    background-position center center
    background-size cover
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
    padding 0.4rem 0.25rem 0 0.25rem
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
