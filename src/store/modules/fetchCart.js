export default {
  state: {
    cart: [],
    itemNr: 0,
    showCart: false,
    isOpen: false,
    loadingOrder: false
  },
  //Olika förändningar vi kan göra på cartens state
  mutations: {
    //lägg till items
    addItemToCart(state, menuItem) {
      state.cart.push(menuItem);
      state.itemNr++;
    },
    //öppna menyn från carten
    toggleMenu(state, toggle) {
      state.isOpen = toggle
    },
    //ta bort items - fan va dessa två va jobbiga..
    removeItemFromCart(state, cartItemId) {
      const cartItemArrayIndex = state.cart.map(function (cartItem) {
        return cartItem.id;
      }).indexOf(cartItemId);
      state.cart.splice(cartItemArrayIndex, 1);
    },
    //Ändra kvantitet - verkar funka nu iallafall.
    changeQuantity(state, payload) {
      const item = state.cart.find(item => item.id === payload.cartItemId);
      if (payload.action === 'add') {
        item.quantity++;
        state.itemNr++;
      } else if (payload.action === 'subtract') {
        if (item.quantity != 0) {
          item.quantity--;
          state.itemNr--;
        }
      }
    },
    toggleCart(state, toggle) {
      state.showCart = toggle;
    }
  }
}
