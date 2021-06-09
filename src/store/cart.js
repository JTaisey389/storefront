const initialState = {
  cart: [],
  // visible: false,
  cartTotal: 0,
}

// ===== REDUCER =====
export default function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return payload.disabled ? state : {...state, cartTotal: state.cartTotal + 1}
    case 'ADD_TO_CART':
      let newState = {
        cart: [...state.cart, payload],
        cartTotal: state.cartTotal + 1
      }
      return newState;
    case 'REMOVE_FROM_CART':
      const cart = [...state.cart];
      let deleteItem = true;
      const newCart = cart.filter((item) => {
        if (item === payload && deleteItem) {
          deleteItem = false;
          return false;
        } else {
          return true;
        }
      })
      return {...state, cart: [...newCart]};
    case 'RESET':
      return initialState;
    
    default:
      return state;
  }
}
// ===== REDUCER ACTION =====
export const increment = (product) => {
  return {
    type: 'INCREMENT',
    payload: product
  }
}
export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}
export function removeFromCart(product) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}