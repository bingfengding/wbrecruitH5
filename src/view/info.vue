<template>
  <div id="info">
    <div class="header">
      
    </div>
    <div class="main">
      <div class="beaderText">
        公司信息
      </div>
      <div class="mainCen">
        <div class="title">
          <p>作为亚洲所属第一全资企业，紐林科集團于2009年应运而生，总部地标坐落英国，由集团优秀资源与业界精英团队合作创办，是集全球多项业务于一体的综合型企业，并在世界各地拥有研发中心和运营基地。</p>
          <p>紐林科集團始终以“构建全球商业格局”为目标，坚持顺应市场战略发展需求，力争成为业界翘楚。集团于2016年正式登陆亚洲地区，首先选择聚焦亚太地区，并在“千岛之国”菲律宾的金融中心马卡蒂设立分部，主要业务为线上游戏运营。</p>
          <div class="upBtn">
            <div class="btn" @click="goto('/us')">上传简历</div>
          </div>
        </div>
        <div class="content">
          <div class="conImg">
            <img src="../image/info/1.jpg" alt="">
          </div>
          <div class="conMain">
            <p>构建全球商业格局, 在致力于成为IT产业的开拓者, </p>
            <p>为”缔造全球第一网络科技品牌”而永不止步.</p>
          </div>
          <div class="conImg">
            <img src="../image/info/2.jpg" alt="">
          </div>
          <div class="conMain">
            <p>以客户满意度为中心，以员工利益为半径，</p>
            <p>企业发展力求“圆满”</p>
            <p>一、经营理念：客户第一、员工第二、股东第三。</p>
            <p>二、用人原则：人品是原则，态度是根本，能力是基础。</p>
            <p>三、用人标准:有德有才，提拔重用</p>
            <p class="space">有德无才，培养使用</p>
            <p class="space">有才无德，限制使用</p>
            <p class="space">无德无才，坚决不用</p>
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

    }
  },
  methods:{
    goto(url){
      this.$router.push(url)
    }
  },
  components: {

    }
}
</script>

<style lang='stylus' scoped>
#info
  .header
    width 100%
    height 4.4rem
    background url('../image/info/info_banner.jpg')
    background-size cover
    background-position center center
  .main
    .beaderText
      line-height 0.8rem
      padding 0 0.3rem
      font-size 0.36rem
      height 0.8rem
      background-color #1c1c1c
      width 100%
      font-weight 600
      color #ffffff
    .mainCen
      padding 0 0.3rem
      .title
        padding-top 0.3rem
        font-size 0.22rem
        p
          margin-bottom 0.5rem
        .upBtn
          .btn
            width 4rem
            height 0.6rem
            background-color #fb7b1d
            color #fff
            font-size 0.22rem
            border-radius 0.08rem
            line-height 0.6rem
            text-align center
      .content
        padding-top 0.5rem
        .conImg
          height 3rem
        .conMain
          padding 0.4rem 0 0.4rem 0.3rem
          .space
            text-indent 0.44rem
          
</style>
