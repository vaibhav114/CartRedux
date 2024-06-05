import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { ACTIONS } from './context/useCart';

const CartItem = ({ id, img, title, price, amount , dispatch ,state}) => {
  
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        {/* remove button */}
        <button className='remove-btn' onClick={() => dispatch({type:ACTIONS.remove,payload:id})}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => dispatch({type:ACTIONS.increase,payload:id})}>
          <FaChevronUp className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{amount}</span>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => dispatch({type:ACTIONS.decrease,payload:id})}>
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
