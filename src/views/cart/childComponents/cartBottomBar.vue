<template>
    <div class="cart-bottom-bar">
      <div class="check">

      <CheckButton :isCheck="isSelectAll" @click.native="checkAll(isSelectAll)"></CheckButton>
        <div>全选</div>

      </div>
      <div class="price">
        合计：￥{{totalprice}}
      </div>
      <div class="calulate">
        结算({{calulate}})
      </div>
    </div>
</template>

<script>
    import CheckButton from "components/content/CheckButton/CheckButton";
    export default {
        name: "cartBottomBar",
      components: {CheckButton},
      data(){
        return{

        }
      },
      methods:{

        // 将isSelectAll的结果传入checkAll函数中，只要有一个没选中，则让全部选中，如果全部选中，则让全部为不选中
        checkAll(isSelectAll){

           this.$store.state.cartList.forEach(item => item.checked = !isSelectAll)


        }
      },
      computed:{
          //合计
        totalprice(){
          return this.$store.state.cartList.filter(item=>{
            return item.checked
          }).reduce((preValue,item) =>{
            return preValue + item.price *item.count
          },0).toFixed(2)
        },
        //总数
        calulate(){
          return this.$store.state.cartList.filter(item => item.checked).length
        },
        isSelectAll(){
          //如果长度等于0 则返回false
          if(this.$store.state.cartList.length === 0 ){ return false}

          //调用数据的find方法，只要数组中有一个的checked为false 通过取反 find就直接返回true isSelectAll就返回false
          return !this.$store.state.cartList.find(item => !item.checked)
        }

      }
    }
</script>

<style scoped>
.cart-bottom-bar{
  height: 35px;
  position: relative;
  box-shadow: 0 5px 15px -5px rgba(0,0,0,.5);
  display: flex;
  background-color: white;
  align-items: center;
}
.check{

  display: flex;

}
  .check>div{
    margin-left: 7px;
  }
  .price{
    margin-left: 20px;
    flex: 1;
  }
  .calulate{
    height: 100%;
    width: 80px;
    text-align: center;
    background-color: #ee0a24;
    color: white;
    line-height: 35px;
  }

</style>
