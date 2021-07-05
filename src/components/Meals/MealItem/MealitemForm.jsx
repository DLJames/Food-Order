import { useRef, useState } from 'react';
import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';


const MealItemForm = props => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = event => {
    event.preventDefault();
    const amountInput = amountInputRef.current.value;
    const amountInputNumber = +amountInput;

    if(amountInput.trim().length === 0 || amountInputNumber < 1 || amountInputNumber > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(amountInputNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amoumt"
        input={{
          id: `amount_${props.id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
    </form>
  );
};

export default MealItemForm;