<template>
    <div class="recommend">
      <div v-for="item in recommends" :key="item.index" >
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props:{
          recommends:{
            type:Array,
            default(){
              return []
            }
          }
        }

    }
</script>

<style scoped>
.recommend{

  width: 100%;
  display: flex;
  justify-content: space-around;


}
  .recommend>div{
    height: 150px;
    flex: 1;
    margin: 15px 0 20px;
    text-align: center;
    border-bottom: 10px solid gainsboro;
  }
.recommend>div img{
  width: 80px;
  height: 80px;
}
</style>
