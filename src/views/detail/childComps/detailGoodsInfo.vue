<template>
    <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
      <div class="info-desc clear-fix">
        <div class="start"></div>
        <div class="desc">{{detailInfo.desc}}</div>
        <div class="end"></div>
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
        <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imgLoad">
      </div>
    </div>
</template>

<script>
    export default {
        name: "detailGoodsInfo",
      data(){
          return{

          }
      },
      props:{
          detailInfo:{
            type:Object,
            default(){
              return {}
            }
          }
      },
      methods:{
          imgLoad(){
            this.$emit("imgLoad")
          }
      }

    }
</script>

<style scoped>
  .info-desc{
    height: 140px;
    font-family: "微软雅黑";
    padding: 5px;
    display: flex;
    flex-direction:column;

  }
  .start::after{
    content: "";
    width: 7px;
    height: 7px;
    background-color: black;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .start{
    height: 20px;
    width: 100px;
    border-bottom: gainsboro 1.5px solid;
    float: left;
    position: relative;
  }
  .desc{
    margin-top: 12px;
  }
  .end::after{
    content: "";
    width: 7px;
    height: 7px;
    background-color: black;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .end{
    height: 10px;
    width: 100px;
    border-bottom: gainsboro 1.5px solid;
    float: right;
    position: relative;
    left: 73%;
  }
.info-list img{
  width: 375px;
}
  .info-key{
    font-size: 20px;
    padding-left: 10px;
    height: 50px;
    line-height: 50px;
    color: black;
  }
</style>
