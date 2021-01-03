<template>
    <div class="moneyList">
      <money-list-item v-for="item in moneyList" :key="item.index" :item="item"></money-list-item>
    </div>
</template>

<script>
  import moneyListItem from './moneyListItem'

    export default {
        name: "moneyList",
      components:{
          moneyListItem
      },
      data(){
          return{
            moneyList: {
              Balance: {
                count: '0.00',
                desc: '我的余额',
                unit: '元'
              },
              Cfav: {
                count: 0,
                desc: '我的优惠',
                unit: '个'
              },
              Point: {
                count: 0,
                desc: '我的积分',
                unit: '分'
              }
            }


          }
      }
    }
</script>

<style scoped>
.moneyList{
  display: flex;

}
</style>
