<template>
    <div ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
      props:{
        probeType: {
          type: Number,
          default: 0
        },
        pullUpLoad: {
          type:Boolean,
          default: false
        }
        },
      data(){
          return{
            Scroll:null,

          }

        },

      mounted() {

          this.Scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
            pullUpLoad: this.pullUpLoad

          }),
            this.Scroll.on("scroll",(position)=>{
              this.$emit("scroll",position)
            }),
            this.Scroll.on("pullingUp",()=>{
              this.$emit("pullingUp")
            })
      },
      methods:{

          ScrollTo(x,y,time=500){
          this.Scroll &&  this.Scroll.scrollTo(x,y,time);
          },
        finishPullUp(){
          this.Scroll && this.Scroll.finishPullUp()
        },
        refresh(){
            this.Scroll && this.Scroll.refresh()
        }


      }
    }

</script>

<style scoped>

</style>
