<template>
  <div id="app">
    <bg-header></bg-header>
   
      <router-view/>
  
    <features v-if="showWork"></features>
    <bg-footer></bg-footer>
    <bg-sidebar></bg-sidebar>
  </div>
</template>
<script>
import bgFooter from '@/components/footer' 
import bgHeader from '@/components/header'
import bgSidebar from '@/components/sidebar'
import features from "@/components/features"
export default {
  name: 'App',
  data(){
    return {
      showWork:true
    }
  },
  components:{
    bgHeader,
    bgFooter,
    bgSidebar,
    features
  },
  watch:{
    $route(to,from){
      if(to.name ==='home' || to.name ==='job' || to.name ==='us'){
        this.showWork = false
      }else{
        this.showWork = true
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  padding-top: 1rem;
}
</style>
