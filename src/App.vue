<template>
  <div id="app">
    <keep-alive exclude="detail">
  <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/maintarbar/MainTarBar'


export default {
  name: 'App',
  components: {MainTabBar},
  data(){
    return{
        MainTabBar
      }
    }

  }

</script>

<style>
  @import "assets/css/base.css";
</style>
