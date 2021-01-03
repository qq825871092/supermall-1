<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" @titleClick="titleClick" ref="navBar"></detail-nav-bar>
    <back-top @click.native="BackClick" v-show="isShowBackTop"></back-top>
    <Scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
    <detail-swiper :top-images="topImages" ></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop" ></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" ></detail-goods-info>
    <detail-param-info :paramInfo="paramInfo" ref="params"></detail-param-info>
    <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
    <Goods-list :goods="recommends" ref="goods"></Goods-list>
    </Scroll>

    <detail-bottom-tab @addShopCar="addCart"></detail-bottom-tab>
</div>
</template>

<script>
    import DetailNavBar from "./childComps/detailNavBar"
    import DetailSwiper from "./childComps/detailSwiper"
    import DetailBaseInfo from "./childComps/detailBaseInfo";
    import DetailShopInfo from "./childComps/detailShopInfo";
    import DetailGoodsInfo from "./childComps/detailGoodsInfo";
    import DetailParamInfo from "./childComps/detailParamInfo"
    import DetailCommentInfo from "./childComps/detailCommentInfo";
    import DetailBottomTab from "./childComps/detailBottomTab";

    import  Scroll from "components/common/Scroll/Scroll"
    import GoodsList from "components/content/goods/GoodsList";

    import {backTop} from "common/mixin";

    import {debounce} from "../../common/utils";

    import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "../../network/detail"









    export default {
        name: "detail",
      components: {
        DetailBottomTab,
        GoodsList,
        DetailCommentInfo,
        DetailParamInfo,DetailGoodsInfo,
        DetailShopInfo, DetailBaseInfo, DetailSwiper,
        DetailNavBar,Scroll},

      mixins:[backTop],

      data(){
          return{
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            refresh:null,
            detailInfo: {},
            paramInfo:{},
            commentInfo:{},
            recommends:{},
            themeTopsY: [],
            getThemeTops:null,
            currentIndex:0
          }
      },
      created() {

        getRecommend().then(res=>{
          this.recommends = res.data.list
        });

          this.iid = this.$route.params.iid;

        getDetail(this.iid).then(res=>{
          this.topImages = res.result.itemInfo.topImages
          this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)

          this.shop = new Shop(res.result.shopInfo)

          //图片
          this.detailInfo = res.result.detailInfo

          //参数
          this.paramInfo = new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)

          //评论
          if(res.result.cRate !== 0){

            this.commentInfo = res.result.rate.list[0]

          }

        })


      },
      mounted() {



        this.refresh = debounce(this.$refs.scroll.refresh,200)



        this.$bus.$on("DetailImgRefresh",()=>{
          this.refresh()

        })

        this.getThemeTops = debounce(()=>{
          this.themeTopsY = []
          this.themeTopsY.push(0);
          this.themeTopsY.push(this.$refs.params.$el.offsetTop);

          if(this.$refs.comment.$el.offsetTop){
            this.themeTopsY.push(this.$refs.comment.$el.offsetTop);
          }else {
            this.themeTopsY.push((this.$refs.goods.$el.offsetTop - 150));
          }

          this.themeTopsY.push((this.$refs.goods.$el.offsetTop - 50));
          this.themeTopsY.push(Number.MAX_VALUE);

        },50)
        this.imgLoad();

      },
      methods:{

        contentScroll(position){

          this.isShowBackTop = (-position.y) > 1000

          const positionY = -position.y
          let length = this.themeTopsY.length
          for (let i = 0 ; i < length - 1; i++){
            if( this.currentIndex !== i && (positionY >= this.themeTopsY[i] && positionY < this.themeTopsY[i + 1]) ) {
              this.currentIndex = i;
              this.$refs.navBar.currentIndex = i
            }
          }

        },

          imgLoad(){
            this.$refs.scroll.refresh();
            this.getThemeTops()
          },

        titleClick(index){

          this.$refs.scroll.ScrollTo(0,-this.themeTopsY[index],200)

        },

        addCart(){
          const product = {}
          product.image = this.topImages[0];
          product.title = this.goods.title;
          product.desc = this.goods.desc;
          product.price = this.goods.realPrice;
          product.iid = this.iid;
          product.count = 1;
          product.checked = true;

          this.$store.dispatch("addCart",product).then(res=>{
            this.$toast.show(res,2000)
          })
        }

      }
    }
</script>

<style scoped>
#detail{
  position: relative;
  height: 100vh;
  background-color: #fff;
  z-index: 11;
}
.nav-bar{
  position: relative;
  top: 0;
  background-color: #fff;
  z-index: 12;
}
  .content{
    height: calc(100% - 40px - 49px);
  }
</style>
