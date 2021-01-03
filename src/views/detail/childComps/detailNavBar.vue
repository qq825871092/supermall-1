<template>
    <div>
      <nav-bar class="nav">
        <div slot="left" class="titleLeft" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="titleNavBar">
          <div v-for="(item,index) in titles"
               :key="item.index"
            :class="{active:  index === currentIndex}"
          @click="titleClick(index)">
            {{item}}
          </div>
        </div>
      </nav-bar>
    </div>
</template>

<script>
  import  navBar from 'components/common/navBar/navBar'
    export default {
        name: "detailNavBar",
      components:{
          navBar
      },
      data(){
         return{
           titles:['商品','参数','评论','推荐'],

           currentIndex: 0
         }
      },
      methods:{
          titleClick(index){
            this.currentIndex = index
            this.$emit('titleClick',index)
          },
          backClick(){
            this.$router.back()
          }

      }
    }
</script>

<style scoped>
  .nav{
    height: 40px;
  }
  .titleLeft img{
    margin-top: 10px;
  }
  .titleNavBar{
    display: flex;
    justify-content: space-around;
  }
  .titleNavBar>div{
    flex: 1;
    font-size: 13px;
    line-height: 40px;
  }
.active{
  color: var(--color-high-text);
}
</style>
