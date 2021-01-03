<template>
    <div class="goods">
      <goods-list-item v-for="item in goods" :key="item.index" :goods-item="item"></goods-list-item>
    </div>
</template>

<script>
    import GoodsListItem from "./GoodsListItem"

    export default {
        name: "GoodsList",
      components: {GoodsListItem},
      props:{
          goods:{


          }

     }
    }
</script>

<style scoped>
.goods{
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
