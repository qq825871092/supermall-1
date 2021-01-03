<template>
    <div class="shop-info">
      <div class="shop-top">
        <img :src="shop.logo" alt="">
        <span class="title">{{shop.name}}</span>
      </div>
      <div class="shop-middle">
        <div class="shop-middle-item shop-middle-left">
          <div class="info-sells">
            <div class="sells-count">
              {{shop.sells }}
            </div>
            <div class="sells-text">总销量</div>
          </div>
            <div class="info-goods">
              <div class="goods-count">
                {{shop.goodsCount}}
              </div>
              <div class="goods-text">全部宝贝</div>
            </div>
        </div>
        <div class="shop-middle-item shop-middle-right">
          <table>
            <tr v-for="(item,index) in shop.score" :key="index" >
              <td>{{item.name}}</td>
              <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
              <td class="better" :class="{'better-more' : item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="shop-bottom">
        <div class="enter-shop">进店逛逛</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "detailShopInfo",
      props:{
          shop:{
            type:Object,
            default() {
              return {};
            }
          }
      }
    }
</script>

<style scoped>
  .shop-info{
    padding: 6px;
  }
.shop-top{
  height: 90px;
  display: flex;
}
.shop-top img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 12px;
}
  .title{
    font-size: 18px;
    line-height: 40px;
    height: 40px;
    display: inline-block;
    margin-top: 20px;
    margin-left: 12px;
  }
  .shop-middle{
    display: flex;

  }
  .shop-middle-left{
    display: flex;
    flex: 1;
    text-align: center;

    border-right: #eeeeee 2px solid;
  }
  .info-sells{
    margin-top: 10px;
    flex: 1;
  }
  .info-goods{
    margin-top: 10px;
    flex: 1;
  }
  .sells-text{
    margin-top: 5px;
  }
  .goods-text{
    margin-top: 5px;
  }
  .shop-middle-right{
    flex: 1;
    text-align: center;

    font-size: 14px;
  }
  .shop-middle-right table{
    height: 80px;
    margin-left: 10px;
    width: 160px;
  }
  .score{
    color: greenyellow;
  }
  .score-better{
    color: red;
  }
  .better span{
    color: white;
    background-color: greenyellow;
    font-size: 13px;
  }
  .better-more span{
    background-color:red;
  }
.shop-bottom{
  margin-top: 24px;
  width: 100%;

}
.enter-shop{
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  width: 200px;
  text-align: center;
  background-color: #eeeeee;
  border-radius: 5px;
}
</style>
