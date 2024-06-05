import { FaCartPlus } from 'react-icons/fa';
import useCart from './context/useCart';
import { useState } from 'react';
const Navbar = () => {
  const {state } = useCart()
  return (
    <nav>
      <div className='nav-center'>
        <h4>useReducer</h4>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{state.items.reduce((tot,itm)=>{
              return tot+parseInt(itm.amount,10)
            },0)}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
