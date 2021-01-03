<template>
<div class="moneyListItem">
  <div class="count">
    <span style="color: var(--color-high-text); font-size: 25px">{{item.count}}</span>
    {{item.unit}}
  </div>
  <div class="desc">
    {{item.desc}}
  </div>
</div>
</template>

<script>
  export default {
    name: "moneyListItem",
    props:{
      item:{

      }
    }
  }
</script>

<style scoped>
.moneyListItem{
  margin-top: 4px;
  flex:1;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;
  font-size: 14px;
  font-weight: bold;

}
  .desc{
    margin-top: 8px;
  }
</style>
