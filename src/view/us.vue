<template>
  <div id="us">
    <div class="header">
    </div>
    <div class="main">
      <div class="callUs">
        <div class="email">
          <div class="title">电子邮件</div>
          <div class="text">nletpse@gmail.com</div>
          <div class="btnBox">
            <div class="btn" @click="email">
              联系我们
              <div class="img">
                <img src="../image/us/email.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="skype">
          <div class="title">skype</div>
          <div class="text">nletpse@maxoof.net</div>
          <div class="btnBox">
            <div class="btn" @click="skype">
              联系我们
              <div class="img">
                <img src="../image/us/skype.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <mt-popup
        v-model="popupVisible"
        position="top"
        name="success"
        :modal = false
        class="success"
        >
        <p>{{successText}}</p>
      </mt-popup>
      <div class="mainHeader">
        <p>你是我们要找的那颗闪耀之星吗？</p>
        <p>立刻上传简历</p>
      </div>
      <div class="formBox">
        <mt-field label="职位" 
          placeholder="请输入面试职位" 
          v-model="form.note"
          class="sure"
        ></mt-field>
        <mt-field label="姓名" 
          placeholder="请输入姓名" 
          v-model="form.name"
          class="sure"
          :attr="{ minlength: 12 }"
        ></mt-field>
        <mt-field label="电子邮箱" placeholder="请输入邮箱地址"  v-model="form.email" 
        class="sure"
        ></mt-field>
        <mt-field label="手机号码" placeholder="请输入手机号码"  v-model="form.phone"
         class="sure"
        :attr="{ maxlength: 12 }"></mt-field>
        <mt-field label="QQ" placeholder=""  v-model="form.qq" ></mt-field>
          <mt-field label="微信" placeholder=""  v-model="form.wechat" 
          ></mt-field>
          <mt-field label="skype" placeholder="" v-model="form.skype"></mt-field>
          <div class="upTextBox">
            <p class="fileType">
              <span>*</span> 支持文件格式：.doc | .docx | .pdf | 文件大小不能超过1MB
            </p>
            <p class="fileName" v-show="fileName">
              文件:{{fileName}}</p>
            <a class="fileBox">
              <input type="file" 
              value="选择文件" 
              style="opacity:0"
              ref="file"
              accept="application/msword, application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              @change="changeFile($event)"
              />
              <span>上传简历</span>
            </a>
              
          </div>
          <div class="subbtnBox">
            <div class= "submitBtn" @click="submitForm">提交简历</div>
            <div class="clear" @click="clear">取消</div>
          </div>
      </div>
    </div>
    <Bg-bottom></Bg-bottom>
  </div>
</template>

<script>
import { Field,Popup  } from "mint-ui"
import {upload} from "@/api/home/home"
import BgBottom from "@/components/bottom"
import { setTimeout, clearTimeout } from 'timers';
export default {
  data () {
    return {
        fileName:"",
        successText:"",
        popupVisible:false,
        form:{
          note:"",
          position :null,
          name:"",
          email:null,
          file:"",
          phone:null,
          other:"",
          qq:null,
          skype:"",
          wechat:""
        }
      }
    },
    mounted(){
      this.$nextTick(()=>{
      this.form.position = this.$store.getters.getTeam1
  
    })
    },
    methods:{
      
      changeFile(e){
        let files = e.target.files
        if(files[0].size>1024*1024){
          alert("文件不能超过1MB")
          this.$refs.file.files = null
          this.form.file =""
          this.form.other = ""
        }else{
         
          if(files[0].type != "application/msword" && files[0].type != "application/pdf" && files[0].type != "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
            this.successText = "请上传规定格式的文件"
            this.popupVisible = true
            this.closeSuccess()
            this.fileName = ""
            this.$refs.file.files = null
            this.form.file =""
            this.form.other = ""
          }
          else{
            
            let reader = new FileReader()
            reader.readAsDataURL(files[0])
            reader.onload = () => {
              this.form.file =  reader.result
              this.form.other = {
                name:files[0].name,
                raw:files[0]
                }
      
                this.fileName = files[0].name
                this.$refs.file.files = null
              }
          
        }
        }
      },
      submitForm(){
        if(this.form.note=="") {
          this.successText = "职位不能为空"
          this.popupVisible = true
          this.closeSuccess()
        }else if(this.form.name == "") {
          this.successText = "姓名不能为空"
          this.popupVisible = true
          this.closeSuccess()
        }else if(this.form.email ==null) {
          this.successText = "电子邮箱不能为空"
          this.popupVisible = true
          this.closeSuccess()
        }else if(this.form.phone == null) {
          this.successText = "手机号码不能为空"
          this.popupVisible = true
          this.closeSuccess()
        }else if(this.form.file=="") {
          this.successText = "必须上传简历"
          this.popupVisible = true
          this.closeSuccess()
        }else{
          this.successText = "上传中请耐心等待"
          this.popupVisible = true
          console.time("a")
          upload(this.form).then(
            res=>{
              console.timeEnd("a")
              this.successText = "提交成功"
              //this.popupVisible = true
              this.closeSuccess()
              this.clear()
            }
          )
        }
      },
      closeSuccess(){
        
        let timer = setTimeout(()=>{
          this.successText = ""
          this.popupVisible = false
          clearTimeout(timer)
        },2000)
      },
      clear(){
        let _obj = {
          note:"",
          name:"",
          email:null,
          file:"",
          phone:null,
          other:"",
          qq:null,
          skype:"",
          wechat:""
        }
        this.form = _obj
        this.fileName = ""
        this.$refs.file.files = null
      },
      email(){
      window.top.open("mailto:newlinkteam@gmail.com")
    },
    skype(){
      window.top.open("skype:nletpse@maxoof.net?chat")
    },
    },
  components: {
    BgBottom,
    mtField:Field,
    mtPopup:Popup
  }
}
</script>

<style lang='stylus' scoped>
#us
  .header
    height 4.4rem
    width 100%
    background url('../image/us/us_banner.jpg')
    background-size cover
  .main
    display flex
    justify-content center
    flex-wrap wrap
    position relative
    padding-bottom 0.6rem
    .success
      width 100%
      color #fff
      p
        width 100%
        height 0.8rem
        line-height 0.8rem
        font-size 0.3rem
        text-align center
        background-color rgba(144,144,144,0.7)
    .callUs
      width 6.9rem
      padding 0.3rem
      box-shadow 0.02rem 0.02rem 0.1rem 0.04rem rgba(0,0,0,0.3)
      border-radius 0.08rem
      position relative
      top -0.2rem
      background-color rgba(255,255,255,0.8)
      display flex
      justify-content space-between
      .title
        font-size 0.36rem
        height 0.5rem
        line-height 0.5rem
        color #333
        font-weight 600
      .text
        font-size 0.22rem
        padding 0.1rem 0 0.2rem 0
      .btnBox
        .btn
          padding 0 0.2rem
          width 1.6rem
          height 0.4rem
          color #ffffff
          background-color #ff5d22
          border-radius 0.4rem
          line-height 0.4rem
          position relative
          .img
            position absolute
            right 0.2rem
      .email
        .img
          width 0.2rem
          height 0.16rem
          top 0.12rem
          display flex
          justify-content center
          align-items center
          img
            width 100%
            height 100%
      .skype
        .img
          width 0.2rem
          height 0.2rem
          top 0.1rem
          display flex
          justify-content center
          align-items center
          img
            width 100%
            height 100%
    .mainHeader
      padding-top 0.2rem
      padding-bottom 0.4rem
      p
        font-size 0.42rem
        font-weight 600
        text-align center
    .formBox
      width 100%
      padding 0 0.3rem
      .sure
        &:before
          content "*"
          color #ff5d22
          line-height 0.8rem
      .mint-cell
        border-bottom 1px solid #dfdfdf
        &:first-of-type
          border-top 1px solid #dfdfdf
      .upTextBox
        padding-top 0.3rem
        .fileName
          padding 0.1rem
        .fileType
          font-size 0.22rem
          color #cccccc
          padding-bottom 0.1rem
          span
            color #ff5d22
            padding-right 0.1rem
        .fileBox
          display inline-block
          background-color #ccc
          width 100%
          height 0.6rem
          position relative
          border-radius 0.08rem
          span
            position absolute
            top 50%
            left 50%
            transform translate(-50%,-50%)
            color #666666
            font-size 0.28rem
            pointer-events: none;
          input
            width 100%
            height 100%
            &:focus 
              outline none
      .subbtnBox
        width 100%
        display flex
        justify-content center
        padding-top 0.5rem
        .submitBtn
          background-color #ff5d22
          width 2.6rem
          height 0.6rem
          color #ffffff
          line-height 0.6rem
          text-align center
          border-radius 0.6rem
        .clear
          width 2.6rem
          height 0.6rem
          background-color #dfdfdf
          color #666
          line-height 0.6rem
          text-align center
          margin-left 0.6rem
          border-radius 0.6rem
      
</style>
<style lang="stylus">
#us
  .formBox
    .mint-cell-wrapper
      font-size 0.28rem
    .mint-field
      height 0.8rem
    .mint-cell
      min-height 0.8rem
</style>
