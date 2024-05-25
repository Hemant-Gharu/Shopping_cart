export const reducer = (state, action) => {
   switch (action.type) {
      case 'SET_PRODUCTS':
         return {
            ...state,
            products: action.payload
         };
      case 'ADD_TO_CART':
         const item = state.products.find(product => product.id === action.payload);
         const inCart = state.cart.find(item => item.id === action.payload ? true : false);

         return {
            ...state,
            cart: inCart
               ? state.cart.map(item =>
                  item.id === action.payload
                     ? { ...item, qty: item.qty + 1 }
                     : item
               )
               : [...state.cart, { ...item, qty: 1 }]
         };
      case 'REMOVE_FROM_CART':
         return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
         };
      case 'UPDATE_QTY':
         return {
            ...state,
            cart: state.cart.map(item =>
               item.id === action.payload.id
                  ? { ...item, qty: action.payload.qty }
                  : item
            )
         };
      default:
         return state;
   }
};
