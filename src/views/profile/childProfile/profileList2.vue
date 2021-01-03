<template>
    <div class="ProfileList_2">
      <div class="listItem">
        <div class="icon"> <img src="~assets/img/profile/cart.svg" alt=""></div>
      <div class="profile-message">我的购物车</div>
    </div>
      <div class="listItem">
        <div class="icon"><img src="~assets/img/profile/shopping.svg" alt=""></div>
        <div class="profile-message">下载购物App</div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "profileList2"
    }
</script>

<style scoped>

  .icon{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  .icon img{
    width: 25px;
  }
.listItem{
  height: 40px;
  display: flex;
}
  .profile-message{
    flex: 8;
    height: 100%;
    line-height: 40px;
    border-bottom: 1px solid #eeeeee;
    
  }
</style>
