import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      //새로운아이템 선택
      const newItem = action.payload
      //중복된 아이템을 체크해야함 중복되었다면 갯수만 +1 안되었다면 제품을 등록해야함
      //existing : 기존의, 사용되는 이라는뜻
      const existingItem = state.items.find((item) =>
        item.id === newItem.id
      )
      // 토탈수량을 1개씩 증가 시켜줌
      state.totalQuantity++;

      // 기존에있는 아이템이 없을경우 실행되는로직
      // items에 id, price, quantity, totalprice, name을 추가함
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,

        })
        //기존에 아이템이있을경우
        // 기존아이템수량을 +1 하고
        // 기존아이템에 총가격 + 새로운 아이템에 가격을 더함
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) { /*TODO- 여기에 코드를 작성해 주세요*/ },

  }
})

export const cartActions = cartSlice.actions;

export default cartSlice;
