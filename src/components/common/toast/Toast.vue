<template>
    <div class="toast" v-show="isShow">
      <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
        name: "Toast",
      data(){
          return{
            message:'',
            isShow:false
          }
      },
      methods:{
          show(message ,duration = 2000){
            this.isShow = true
            this.message = message

            setTimeout(()=>{
              this.isShow = false
              this.message = ''
            },duration)
          }
      }

    }
</script>

<style scoped>
.toast{
  position: fixed;
  left:0;
  right:0;
  margin:0 auto;
  top: 50%;
  width: 150px;
  text-align: center;
  padding: 10px 12px;
  background-color: rgba(0,0,0,.65);
  color: white;
  z-index: 999;
}

</style>
