<template>
    <div class="cart-list-item">
      <div class="check-icon">
      <check-button
        :isCheck='product.checked'
        @click.native='CheckClick' />
      </div>
      <div class="img-item">
        <img :src="product.image" />
      </div>
      <div class="other-item-msg">
        <h3 class="title common">{{product.title}}</h3>
        <p class="description common">{{product.desc}}</p>
        <div class="product-price-count">
          <span class="price">￥{{product.price}}</span>
          <span class="count">x{{product.count}}</span>
        </div>
      </div>
    </div>
</template>

<script>

  import checkButton from "components/content/CheckButton/CheckButton"

    export default {
        name: "cartListItem",
      props:{
           product:{
             type:Object,
             default(){
               return {}
             }
           }
      },
      components:{
          checkButton
      },
      methods:{
        CheckClick(){
          this.product.checked = !this.product.checked
        }
      }
    }
</script>

<style scoped>
  .cart-list-item {
    display: flex;
    padding: 10px 5px 10px 0;
    border-top: 1px solid #ccc;
  }
  .check-icon{
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .other-item-msg {
    flex: 1;
  }
  .img-item {
    width: 68px;
    height: 85px;
  }
  .img-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  .title {
    font-size: 14px;
    color: #111;
  }
  .common {
    width: 200px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: normal;
    padding: 5px;
  }
  .description {
    font-size: 12px;
    color: #666;
  }
  .product-price-count {
    position: relative;
    font-size: 14px;
    top: 15px;
  }
  .price {
    position: absolute;
    left: 5px;
    color: var(--color-tint);
  }
  .count {
    position: absolute;
    right: 5px;
    font-size: 16px;
  }

</style>
