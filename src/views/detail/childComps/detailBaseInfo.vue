<template>
  <div>
<div v-if="Object.keys(goods).length !== 0" class="base-info">
  <div class="info-title">{{goods.title}}</div>
  <div class="info-price">

    <span class="n-price">{{goods.newPrice}}</span>
    <span class="o-price">{{goods.oldPrice}}</span>
    <span v-if="goods.discount"  class="discount">{{goods.discount}}</span>
  </div>
  <div class="info-other">
  <span>{{goods.columns[0]}}</span>
  <span>{{goods.columns[1]}}</span>
  <span>{{goods.services[goods.services.length-1].name}}</span>
  </div>
  <div class="info-service">
  <span class="info-service-item" v-for="index in goods.services.length-1 "
       :key="index">
  <img :src="goods.services[index-1].icon">
  <span> {{goods.services[index-1].name}}</span>
  </span>
  </div>
</div>
  </div>
</template>

<script>
    export default {
        name: "detailBaseInfo",
        props:{
          goods:{
            type:Object,
            default(){
              return {}
            }
          }
        }

    }
</script>

<style scoped>
.base-info{
  font-family: '微软雅黑';
  padding: 6px;
}
.info-title{
  font-weight: bold;
  color: black;
  margin-top:6px;
  text-indent: 0.5em;
}
.info-price{
  margin-top: 12px;
  position: relative;
}
.n-price{
  color: var(--color-high-text);
  font-size: 24px;
}
  .o-price{
    font-size: 13px;
    margin-left: 12px;
    color: darkgray;
    text-decoration: line-through;
    position: relative;
  }
  .discount{
    background-color: var(--color-high-text);
    border-radius: 5px;
    color: white;
    font-size: 14px;
    left: 12px;
    top: -6px;
    position: relative;
  }
  .info-other{
    margin-top: 24px;
    display: flex;
    font-size: 14px;
    color:darkgray ;
    justify-content: space-between;
    height: 30px;
    border-bottom: 2px #eeee solid;
  }
.info-service{
  height: 60px;
  line-height: 60px;
  border-bottom: 2px #eeee solid;

  font-size: 14px;
  display: flex;
  justify-content: space-between;
}.info-service img{
  height: 14px;
  width: 14px;
 }

</style>
