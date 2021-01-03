<template>
  <div class="category">
  <nav-bar class="cate-nav">
    <div slot="center">商品分类</div>
  </nav-bar>
    <div class="container">
      <div class="leftScroll">

      <left-bar :left-list="leftList" @activeIndex="activeIndex"></left-bar>

      </div>

      <div class="rightScroll">
<div>
      <category-list :sub-category-list="subCategoryList"></category-list>
        <tab-control :title="['综合','新款','精选']" @tabClick="tabClick"></tab-control>
        <goods-list :goods="goods[currentType]"></goods-list>
</div>
      </div>

    </div>

  </div>
</template>

<script>

  import navBar from 'components/common/navBar/navBar'
  import TabControl from "components/common/TabControl/TabControl";
  // import Scroll from "components/common/Scroll/Scroll";

  import leftBar from './childCategory/leftBar'
  import CategoryList from "./childCategory/categoryList";
  import GoodsList from "./childCategory/GoodsList";

  import {getCategory,getSubcategory,getSubCategoryDetail} from 'network/category'





    export default {
        name: "Category",
      data(){
          return{
            leftList:[],
            currentType:'pop',
            currentIndex:0,
            maitKey:'3627',
            subCategoryList: [],
            miniWallkey:'10062603',
            goods:{
              'pop':[],
              'new':[],
              'sell':[]

            },
          }
      },
      components: {
        // Scroll,
        TabControl,
        GoodsList,
        CategoryList,
          navBar,
          leftBar
          },
      created() {
          this.getCategory()


      },
      mounted(){
        this.getSubcategory(this.maitKey);
        this.getSubCategoryDetail(this.miniWallkey,this.currentType)
      },
      methods:{
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
          this.getSubCategoryDetail(this.miniWallkey,this.currentType)
        },
        //点击左侧导航栏从子组件中获取相关数据并保存在data中
          activeIndex(data){
            this.currentIndex = data.index;
            this.maitKey = data.maitKey;
            this.miniWallkey = data.miniWallkey

            this.getSubcategory(data.maitKey)
            this.getSubCategoryDetail(data.miniWallkey,this.currentType)
          },
        // 左边导航栏
          getCategory(){
            getCategory().then(res=>{

              this.leftList = res.data.category.list
            })
          },
        //右边分类
        getSubcategory(maitKey){
            getSubcategory(maitKey).then(res=>{
              this.subCategoryList = res.data.list;
            })
        },

        getSubCategoryDetail(miniWallkey,type){
          getSubCategoryDetail(miniWallkey,type).then(res=>{
            this.goods[type] = res
          })
        }
      }
    }
</script>

<style scoped>
  .category{
    height: 100vh;
  }
  .cate-nav{
    background-color: #ff8198;
    color: white;

  }
  .container{

    height: calc(100% - 40px - 49px);
    display: flex;

     }
  .leftScroll{
   height: 100%;
    flex: 25%;
    overflow: hidden;
    overflow-y: scroll;


}
  /*去滚动条*/
  ::-webkit-scrollbar {
    width: 0px;
  }
  .rightScroll{
    height: 100%;
    flex: 75%;
    overflow: hidden;
    overflow-y: scroll;


  }

</style>
