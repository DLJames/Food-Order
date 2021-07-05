import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0
};
const cartReducer = (state, action) => {
  const {type, value} = action;
  const newState = {...state};
  console.log('value==', action);
  if(type ===  'ADD') {
    const idx = newState.items.findIndex(item => (item.id === value.id));
    let updatedItems = [...newState.items];
    if (idx >= 0) {
      let updatedItem;
      const existingItem = newState.items[idx];
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + value.amount
      };
      updatedItems[idx] = updatedItem;
      newState.items = [...updatedItems];
    }else {
      newState.items = [...newState.items, value];
    }
    newState.totalAmount = newState.totalAmount + value.price * value.amount;
    return newState;
  }
  if(type === 'REMOVE') {
    const idx = newState.items.findIndex(item => item.id === value);
    const existingItem = newState.items[idx];
    let updatedItem;
    let updatedItems = [...newState.items];
    newState.totalAmount = newState.totalAmount - existingItem.price;
    if(existingItem.amount === 1) {
      newState.items = [...newState.items.filter(item => item.id !== value)];
    }else {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1
      };
      updatedItems[idx] = updatedItem;
      newState.items = [...updatedItems];
    }

    return newState;
  }
      
  return defaultCartState;
};

const CartContextProvider = props => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHandler = item => {
    dispatchCart({type: 'ADD', value: item});
  };
  const removeItemFromCartHandler = id => {
    dispatchCart({type: 'REMOVE', value: id});
  };
  const cartContext = {
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    ...cartState
  };

  return (
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
