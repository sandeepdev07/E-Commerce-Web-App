import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import ConfirmationModel from '../components/ConfirmationModel';
import {remove} from '../store/cartSlice'
import ic_items from "../images/ic_items.svg";



function Cart() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  



  const handleRemove = (productId) => {
    console.log("@@@id--",productId);
      dispatch(remove(productId));

  };


 if (products.length===0) {
    return <container>
         
<div  class="card list  center">
<img className="center" src={ic_items}   alt="no items"/>
    <div class="card-body">
     <h5 className='bold'>No products added on card </h5>
    </div>
  </div>
    </container> 

 }


  return (
    <>
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
        </>
  )
}

export default Cart
