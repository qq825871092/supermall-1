export default {
  //mutation唯一的目的是修改state的状态
  addCounter(state,payload){
    payload.count += 1
  },
  addToCart(state,payload){
    state.cartList.push(payload)
  }
}
