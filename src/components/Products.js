import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
import ConfirmationModel from './ConfirmationModel';



const Products = () => {
  
    const dispatch = useDispatch();

    const {data: products,status} = useSelector((state)=> state.product);

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

      console.log("@@@addProduct",product)
    }

    

  

    if (status === STATUSES.LOADING) {
      
      return <h2>Loading....</h2>;
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




          </div>
        ))
      }

    </div>
  )
}

export default Products
