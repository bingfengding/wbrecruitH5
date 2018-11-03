<template>
  <div id="back">
    <div class="header">
    </div>
    <div class="main">
      <div class="beaderText">
        公司背景
      </div>
      <div class="mainCen">
        <div class="title">
          <p>紐林科集團是以英国总部为背景依托，集研发、运营和服务于一体的线上服务公司。</p>
          <p>自2016年登陆亚洲市场以来，始终以“缔造全球第一网络科技品牌”目标，是行业内所公认的市场领先者。</p>
        </div>
        <div class="content">
          <div class="enBox">
            <div class="conTitle">
              <p class="topText">总部位于英国</p>
              <div class="line"></div>
            </div>
            <p class="botText">「是集研发、运营、服务于一体的专业化网络科技公司」</p>
            <div class="eng">
              <div class="engMap">
                <img src="../image/back/en.png" alt="">
                <div class='pin'>
                  
                </div>
                <div class='pulse'></div>
              </div>
            </div>
          </div>
          <div class="PhBox">
            <div class="conTitle">
              <p class="topText">缔造全球领先的网络科技服务品牌</p>
              <div class="line"></div>
            </div>
            <p class="botText">「我们始终致力于为消费者提供超一流的游戏体验」</p>
            <div class="eng">
              <div class="engMap">
                <img src="../image/back/ph.png" alt="">
                <div class='pin'>
                  
                </div>
                <div class='pulse'></div>
              </div>
            </div>
            <div class="manila">
              <img src="../image/back/info.png" alt="">
              <div class='pin'> 
              </div>
              <div class='pulse'></div>
            </div>
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
  components: {

    }
}
</script>

<style lang='stylus' scoped>
#back
  @keyframes pulsate
    0%
      transform scale(0.1, 0.1)
      opacity 0
    50%
      opacity 1
    100%
      transform scale(1.2, 1.2)
      opacity 0
  .header
    height 4.4rem
    width 100%
    background url('../image/back/back_banner.jpg')
    background-size cover
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
      padding 0 0.2rem 0.4rem 0.2rem
      .title
        padding-top 0.3rem
        font-size 0.22rem
        p
          margin-bottom 0.3rem
      .content
        padding-top 0.3rem
        .enBox
          display flex
          justify-content center
          flex-wrap wrap
          .pin
            top 3.0rem
            left 5.0rem
          .pulse
            top 3.3rem
            left 5.06rem
          .eng
            .engMap
              background-image url("../image/back/map1.png")
        .PhBox
          padding-top 0.3rem
          .pin
            top 2.6rem
            left 5.24rem
          .pulse
            top 2.9rem
            left 5.3rem
          .eng
            .engMap
              background-image url("../image/back/map2.png")
          .manila
            margin-top 0.3rem
            width 6.98rem
            height 10.97rem
            background-image url("../image/back/ph_bg.png")
            background-size 100% 100%
            display flex
            align-items flex-end
            position relative
            img
              width 6.98rem
              height 8.36rem
            .pin
              top 2.3rem
              left 3.8rem
            .pulse
              top 2.6rem
              left 3.86rem
              
        .conTitle
          text-align center
          font-weight 600
          font-size 0.36rem
          line-height 0.84rem
          border-bottom 1px solid #c9c9c9
          position relative
          width 100%
          .line
            position absolute
            bottom -0.03rem
            left 50%
            transform translateX(-50%)
            height 0.05rem
            background-color #c9c9c9
            width 1rem
        .botText
          font-size 0.22rem
          padding 0.22rem 0 0.46rem 0
          text-align center
        .pin
          width 0.3rem
          height 0.3rem
          border-radius 50% 50% 50% 0
          background red
          position absolute
          transform rotate(-45deg)
          z-index 2
          cursor pointer
          &:after
            content ''
            width 0.14rem
            height 0.14rem
            margin 0.08rem 0 0 0.08rem
            background #fff
            position absolute
            border-radius 50%
        .pulse
          background rgba(0,0,0,.5)
          border-radius 50%
          height 0.14rem
          width 0.14rem
          position absolute
          transform rotateX(55deg)
          &:after
            content ""
            border-radius 50%
            height 0.4rem
            width 0.4rem
            position absolute
            margin -0.13rem 0 0 -0.13rem
            animation pulsate 1s ease-out
            animation-iteration-count infinite
            opacity 0
            box-shadow 0 0 1px 0.02rem #333
        .eng
          .engMap
            width 6.98rem
            height 6.2rem
            background-size 100% 100%
            padding 0.2rem
            position relative
            img
              width 5rem
              height 5.8rem

            


          
 
</style>
