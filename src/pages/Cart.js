import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {remove} from '../store/cartSlice'

function Cart() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    
      dispatch(remove(productId));
  };
  

  return (
    <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {products.map((product) => (


                    <div key={product.id} className="cartCard">
                        <img className='centerSelected' src={product.image} alt="" />
                        <h6 className='fontBold'>{product.title}</h6>
                        <h5>{"$"+ product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Cart
