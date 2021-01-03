<template>
    <div class="container">
        <category-list-item v-for="(item,index) in subCategoryList" :key="index" :item="item"></category-list-item>
    </div>
</template>

<script>
    import CategoryListItem from "./categoryListItem";
    export default {
        name: "categoryList",
      components: {CategoryListItem},
      props:{
          subCategoryList:{
            type:Array,
            default(){
              return []
            }
          }
      }
    }
</script>

<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
