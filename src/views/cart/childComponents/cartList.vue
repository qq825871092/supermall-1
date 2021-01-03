<template>
    <div class="cart-list">
      <Scroll class="content" ref="scroll">
        <cart-list-item v-for="(item,index) in cartList"
                        :key="index"
                        :product="item">

        </cart-list-item>
      </Scroll>
    </div>
</template>

<script>
    import Scroll from "components/common/Scroll/Scroll";

    import { mapGetters } from 'vuex'

    import cartListItem from "./cartListItem"
    export default {
        name: "cartList",
      components: {
          Scroll,
      cartListItem
        },
      computed:{
          ...mapGetters(['cartList'])
      },
      activated() {
          this.$refs.scroll.refresh()
      }
    }

</script>

<style scoped>
  .cart-list{
    height: calc(100vh - 44px - 49px - 35px);
  }.content{
    height: 100%;
    overflow: hidden;
     }

</style>
