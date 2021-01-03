<template>

      <div class="login">
        <div class="login-img">
          <img src="~assets/img/profile/avatar.svg" />
        </div>
        <div class="user-info">
          <p class="font-login">登陆/注册</p>
          <div class="font-small">

          <img src="~assets/img/profile/phone.svg" />

            <p>{{message}}</p>
          </div>
        </div>
        <div class="right-angle">
          <img src="~assets/img/profile/arrow_right.png" />
        </div>
      </div>

</template>

<script>
    export default {
      name: 'Login',
      data () {
        return {
          message: '暂未绑定手机号'
        }
      }
    }
</script>

<style scoped>
  .login {
    padding: 10px 10px;
    display: flex;
    background-color: var(--color-tint);
  }
  .login-img {
    width: 60px;
    height: 60px;
    margin: 0 10px;
    background-color: #fff;
    border-radius: 50%;
  }
  .login-img img {
    width: 100%;
  }
  .user-info {
    flex: 1;
    padding: 5px 0;

    color: #fff;

  }
  .font-login{
    font-size: 20px;
  }
  .user-info img{
    width: 23px;


  }
  .font-small {
    height: 30px;
    font-size: 14px;
    display: flex;
    line-height: 30px;
  }

  .right-angle {
    width: 30px;
    text-align: center;
    line-height: 60px;
  }
  .right-angle img {
    width: 80%;
  }
</style>
