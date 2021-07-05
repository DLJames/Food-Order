import { useContext } from 'react'; 
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

import classes from './Cart.module.css';

const Cart = props => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);
  const removeCartItemHandler = id => {
    removeItem(id);
  };

  const addCartItemHandler = item => {
    addItem(item);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {
        items.map(item => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={removeCartItemHandler.bind(null, item.id)}
            onAdd={addCartItemHandler.bind(null, {...item, amount: 1})}
          />
        ))
      }
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        {items.length > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
