<template>
    <div class="ProfileList_1">
      <div class="listItem">
        <div class="icon"> <img src="~assets/img/profile/message.svg" alt=""></div>
      <div class="profile-message">我的消息</div>
    </div>
      <div class="listItem">
        <div class="icon"><img src="~assets/img/profile/pointer.svg" alt=""></div>
        <div class="profile-message">积分商城</div>
      </div>
      <div class="listItem">
        <div class="icon"><img src="~assets/img/profile/vip.svg" alt=""></div>
        <div class="profile-message">会员卡</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "profileList1"
    }
</script>

<style scoped>
  .ProfileList_1{
    border-bottom: 20px solid #eeeeee;
    border-top: 20px solid #eeeeee;
  }
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
