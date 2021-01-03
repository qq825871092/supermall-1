<template>
    <div class="tabControl" >
        <div v-for="(item,index) in title" :key="item.index"
             :class="{active: index === currentIndex}"
              @click="tabClik(index)">
          <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
      props:{
          title:{
            type:Array,
            default(){
              return []
            }
          }
      },
      data(){
          return{
            currentIndex:0
          }
      },
      methods:{
        tabClik(index){
          this.currentIndex = index ;
          this.$emit('tabClick',index)
        }
      }
    }
</script>

<style scoped>
.tabControl{
  height: 43px;
  line-height: 43px;
  display: flex;
  text-align: center;
  background-color: white;
  z-index: 10;
}
.tabControl div{
  flex: 1;
  padding: 3px;
}
  .active span{
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
    padding: 5px;
  }
</style>
