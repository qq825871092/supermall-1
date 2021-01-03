<template>

      <swiper class="detail">
        <swiper-item v-for="item in topImages" :key="item.index">
          <img :src="item" alt="" >
        </swiper-item>
      </swiper>

</template>

<script>
    import Swiper from "components/common/swiper/Swiper"
    import SwiperItem from "components/common/swiper/SwiperItem"
    export default {
        name: "detailSwiper",
      components: {Swiper,
      SwiperItem},
      data(){
          return{

          }
      },
      props:{
          topImages:{
            type:Array,
            default() {
              return [];
            }
          }
      },
      methods:{

      }
    }
</script>

<style scoped>
.detail{
  height: 300px;
}
</style>
