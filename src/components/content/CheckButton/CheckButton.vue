<template>
    <div class="check-button" :class="{checked: isCheck}">
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "CheckButton",
      props:{
          isCheck:{
            type:Boolean,
            default(){
              return false
            }
          }
      }
    }
</script>

<style scoped>
.check-button{
  width: 20px;
  height: 20px;
  border-radius: 20%;
  border: 2px solid #aaaa;
}
  .checked{
    border-color: red;
    background-color: red;
  }
</style>
