<template>
   <div id="home">
     <nav-bar class="home-nav">
      <div slot="center">购物街</div>
     </nav-bar>
     <tab-control ref="tabControl1" :title="['流行','新款','精选']"
                  class="tabControl" v-show="isShowTabControl"
                  @tabClick="tabClick" ></tab-control>

     <back-top @click.native="BackClick" v-show="isShowBackTop"></back-top>
     <scroll class="content"
             ref="scroll"
             :probe-type="3"
             @scroll="contentScroll"
             :pull-up-load="true"
             @pullingUp="loadMore">
    <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
     <recommend-view :recommends="recommends"></recommend-view>
     <feature-view></feature-view>
     <tab-control ref="tabControl2"
                  :title="['流行','新款','精选']"
                  @tabClick="tabClick" ></tab-control>

      <goods-list :goods="goods[currentType].list"></goods-list>

     </scroll>
   </div>
</template>

<script>
  import navBar from 'components/common/navBar/navBar'
  import  TabControl from "components/common/TabControl/TabControl"
  import  GoodsList from "components/content/goods/GoodsList"
  import  Scroll from "components/common/Scroll/Scroll"
  import  BackTop from "components/content/BackTop/BackTop"

  import {debounce} from "common/utils"

  import HomeSwiper from "./childComponents/HomeSwiper"
  import RecommendView from "./childComponents/RecommendView"
  import  FeatureView from "./childComponents/FeatureView"

  import {getHomeMultiData,getHomeGoods} from "network/home"




  export default {
        name: "Home",
      components:{
          navBar,
          HomeSwiper,
          RecommendView,
          FeatureView,
          TabControl,
          GoodsList,
          Scroll,
          BackTop
      },



    data(){
          return{
            banners:[],
            recommends:[],
            goods:{
              'pop':{ page:0, list:[]},
              'new':{ page:0, list:[]},
              'sell':{ page:0, list:[]}

            },
            currentType:'pop',
            isShowBackTop:false,
            tabOffsetTop:0,
            isShowTabControl:false
          }

    },
    created() {

            this.getHomeMultiData(),

            this.getHomeGoods('pop'),
            this.getHomeGoods('new'),
            this.getHomeGoods('sell')


    },
    mounted(){

         const refresh = debounce(this.$refs.scroll.refresh,200)

      this.$bus.$on("imgRefresh",()=>{
        refresh()
      })

    },
    methods:{
      swiperImgLoad(){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

          /*
            事件监听
          */
          tabClick(index){
            switch (index) {
              case 0:
                this.currentType = 'pop';
                break;
              case 1:
                this.currentType = 'new';
                break;
              case 2:
                this.currentType = 'sell';
                break
            }
            this.$refs.tabControl1.currentIndex = index
            this.$refs.tabControl2.currentIndex = index
          },

        BackClick(){
            this.$refs.scroll.ScrollTo(0,0)
        },
        // 返回顶部隐藏显示判断
        contentScroll(position){
            this.isShowBackTop = (-position.y) > 1000;

          if(this.tabOffsetTop <= (-position.y)){
            this.isShowTabControl = true
          }else {
            this.isShowTabControl = false
          }
        },

        loadMore(){
            this.getHomeGoods(this.currentType)

        },
          /*
              网络请求相关方法
           */
          getHomeMultiData(){
            getHomeMultiData().then(res=>{
              this.banners = res.data.banner.list;
              this.recommends = res.data.recommend.list;
            })
          },

      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(
          res=>{
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1

            this.$refs.scroll.finishPullUp()
          }
        )
      }
    }
  }


</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
.home-nav{
  background-color: #ff8198;
  color: white;

}
.tabControl{
  position: relative;
  z-index: 9;
}

  .content{

    overflow: hidden;
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
