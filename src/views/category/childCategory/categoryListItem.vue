<template>
    <div class="goods-item">

        <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
        </a>

    </div>
</template>

<script>
    export default {
        name: "categoryListItem",
      props:{
          item:{
            type:Object
          }
      }
    }
</script>

<style scoped>
.goods-item{
  height: 100px;
  width: 80px;
  text-align: center;
}
.goods-item img{
    width: 60px;
    height: 60px;
  }

</style>
