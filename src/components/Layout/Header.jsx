import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

import MealsImg from '../../assets/meals.jpeg';
import classes from './Header.module.css';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={MealsImg} alt="A table full of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
