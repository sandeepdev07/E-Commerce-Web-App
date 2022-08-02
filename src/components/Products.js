import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
import ConfirmationModel from './ConfirmationModel';
import {Loader} from './Loader';
import {Button} from 'react-bootstrap'



const Products = () => {
  
    const dispatch = useDispatch();

    const {data: products,status} = useSelector((state)=> state.product);
    const [showModal,setShowModal] = useState(false)



  //  const[products,setProducts] = useState([]); 

    useEffect(()=>{

      dispatch(fetchProducts())

        // const fetchProduct = async () =>{

        //     const res = await fetch('https://fakestoreapi.com/products');

        //     const data = await res.json();

        //     console.log("@@Sandeep" , data);

        //     // set reponse to setProducts
        //     setProducts(data);
        // }

        // fetchProduct();

    },[]);



    const handleAdd = (product)=>{

      // store product in redux store

      dispatch(add(product));

    }

    

    if (status === STATUSES.LOADING) {
      
      return <Loader/>;
    }

    if (status === STATUSES.ERROR) {
      return <h2>Somthing went wrong</h2>
    }


  return (
    <div className='productsWrapper'>
      {
        products.map(product =>(

          <div className='card' key={product.id}>

            <img className='center' src={product.image} alt=""/>

            <h6>{product.title}</h6>

            <h5>{"$"+ product.price}</h5>

            <button onClick={() => handleAdd(product)} className="btn">Add to cart</button>
            <button onClick={() => setShowModal(true)} className="btn">Scsc</button>

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
          <h6>Do you want to product in the card?</h6>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button color='primary' onClick={()=>{
            setShoeModal(false)
          }}>Close</Button> */}

         <Button onClick={()=>{
            setShowModal(false)
          }}>No</Button>


         <Button>
            Yes
          </Button>

         
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Products
