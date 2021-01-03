<template>

      <ul class="leftList" >
        <li v-for="(item,index) in leftList"
            :key="index"
            :class="{active:index === currentIndex}"
            @click="activeIndex(item,index)"
        >
          {{item.title}}
        </li>
      </ul>

</template>

<script>
    export default {
        name: "leftBar",
      data(){
          return{
          currentIndex:0
          }
      },
      props:{
        leftList:{
            type: Array,
          default() {
            return []
          }
          }
      },
      methods:{
          activeIndex(item,index){
            this.currentIndex = index

            const obj = {
              maitKey:item.maitKey,
              index:index,
              miniWallkey:item.miniWallkey
            }

            this.$emit('activeIndex',obj)
          }
      }
    }
</script>

<style scoped>

.leftList{
  width: 100px;
  background-color: #f6f6f6;

}
  .leftList>li{
    width: 100px;
    height: 45px;
    text-align: center;
    line-height: 45px;
  }
  .active{
    background-color: white;
    border-left: 4px solid #ff8198;
    color: #ff8198;
  }
</style>
