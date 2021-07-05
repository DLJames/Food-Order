import CartIcon from '../Cart/CartIcon';
import { useContext, useState, useEffect } from 'react';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
  const { items } = useContext(CartContext);
  const [buttonIsVisiable, setButtonIsVisiable] = useState(false);
  const numCartTotalAmount = items.reduce((currentNum, item) => (
    currentNum + item.amount
  ), 0);

  const buttonClass = `${classes.button} ${buttonIsVisiable ? classes.bump : ''}`;

  useEffect(() => {
    if(items.length === 0) {
      return;
    }
    setButtonIsVisiable(true);
    let timer = setTimeout(() => {
      setButtonIsVisiable(false);      
    }, 300);
    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={buttonClass} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numCartTotalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
