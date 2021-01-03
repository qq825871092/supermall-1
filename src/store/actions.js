export default {
  addCart(context,payload){

  return new Promise((resolve,reject)=>{

    let oldPayload = context.state.cartList.find(item => item.iid === payload.iid)

    if(oldPayload){
      // oldPayload.count += 1
      context.commit("addCounter",oldPayload)
      resolve('商品已成功添加购物车')
    }else{
      // oldPayload.count = 1
      // context.state.cartList.push(payload)
      context.commit("addToCart",payload)
      resolve('商品已成功添加')
    }
  })


  }
}
