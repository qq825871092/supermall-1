import  BackTop from "components/content/BackTop/BackTop"

export const backTop = {
  components:{
    BackTop
  },
  data(){
    return{
      isShowBackTop:false
    }
  },
  methods:{
    BackClick(){
      this.$refs.scroll.ScrollTo(0,0)
    }
  }
}
