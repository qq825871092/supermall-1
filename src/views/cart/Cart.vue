<template>
  <div>
  <nav-bar class="navBar">
    <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>

  <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
    import NavBar from "components/common/navBar/navBar";

    import { mapGetters } from 'vuex'

    import CartList from "./childComponents/cartList";
    import CartBottomBar from "./childComponents/cartBottomBar";

    export default {
        name: "Cart",
      components: {CartBottomBar, CartList, NavBar},
      computed:{
          ...mapGetters(['cartLength','cartList'])
      }
    }
</script>

<style scoped>
  .navBar{
    background-color: var(--color-tint);
    color: white;
  }
</style>
