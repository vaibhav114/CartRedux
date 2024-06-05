import { act, useContext, useReducer } from 'react';
import CartItem from './CartItem';
import cartItems from './data';
import useCart, { ACTIONS } from './context/useCart';
import useRum from './context/useRum';



const CartContainer = () => {
  const cartArray = [...cartItems];
  const {state,dispatch} = useCart()
  if (state.items.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {state.items.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} dispatch={dispatch} state={state}  />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>{state.totalAmt}</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={() =>dispatch({type:ACTIONS.clear})}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
