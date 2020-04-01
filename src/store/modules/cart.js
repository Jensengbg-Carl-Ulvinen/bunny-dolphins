export default {
  state: {
    cart: [],
    numberOfCartItems: 0,
    showCart: false,
    isOpen: false,
    loadingOrder: false
  },
  mutations: {
    addItemToCart(state, menuItem) {
      state.cart.push(menuItem);
      state.numberOfCartItems++;
    },
    toggleMenu(state, toggle) {
      state.isOpen = toggle
    },
    removeItemFromCart(state, cartItemId) {
      const cartItemArrayIndex = state.cart.map(function (cartItem) {
        return cartItem.id;
      }).indexOf(cartItemId);
      state.cart.splice(cartItemArrayIndex, 1);
    },
    changeQuantity(state, payload) {
      const item = state.cart.find(item => item.id === payload.cartItemId);
      if (payload.action === 'add') {
        item.quantity++;
        state.numberOfCartItems++;
      } else if (payload.action === 'subtract') {
        if (item.quantity != 0) {
          item.quantity--;
          state.numberOfCartItems--;
        }
      }
    },
    toggleCart(state, toggle) {
      state.showCart = toggle;
    }
  }
}
