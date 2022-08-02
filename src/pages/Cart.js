import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import React, {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import ConfirmationModel from '../components/ConfirmationModel';
import {remove} from '../store/cartSlice'
import ic_items from "../images/ic_items.svg";
import { Modal } from 'react-bootstrap';
import {Button} from 'react-bootstrap'




function Cart() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const [showModal,setShowModal] = useState({
    show:false,
    data:undefined,
  })
  

  const handleRemove = (productId) => {
    console.log("@@@id--",productId);
    setShowModal(false);
      dispatch(remove(productId));

  };


 if (products.length===0) {
    return <div>     
   <div  class="card list  center">
  <img className="center" src={ic_items}   alt="no items"/>
  <div class="card-body">
  <h5 className='bold'>No products added on card </h5>
</div>
</div>
</div>  
   

 }


  return (
    <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {products.map((product) => (

                   <div key={product.id} className="cartCard">
                        <img className='centerSelected' src={product.image} alt="" />
                        <h6 className='fontBold'>{product.title}</h6>
                        <h5>{"₹ " + product.price}</h5>

                        <button onClick={() => setShowModal({
              show:true,
              data:product.id
            })} className="btn">Remove</button>
                        {/* <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button> */}
                    </div>
                ))
                }


<Modal
        show={showModal}
        
      >
        <Modal.Header>
         <h5>Confirmation</h5> 
        </Modal.Header>
        <Modal.Body>
          <h6>Do you want to remove product from the card?</h6>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button color='primary' onClick={()=>{
            setShoeModal(false)
          }}>Close</Button> */}

         <Button onClick={()=>{
            setShowModal(false)
          }}>No</Button>

          
         <Button onClick={() => handleRemove(showModal.data)} >
            Yes
          </Button>

         
        </Modal.Footer>
      </Modal>
            </div>
            </div>
  )
}

export default Cart
