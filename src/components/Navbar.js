import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import VariationsExample from './VariationsExample';
import Badge from 'react-bootstrap/Badge';

const Navbar = () => {

  const items = useSelector((state)=> state.cart);



  return (
    <div style={{display:'flex', 
    alignItems:'center',
    justifyContent:'space-between'}}>
      
      <span className='logo'>Redux Store</span>

      <div>
        <Link className='navLink' to='/'>Home</Link>
        <Link className='navLink' to='/cart'>Cart</Link>
   
   <span className='cartCount'><Badge pill bg="success">Cart Items : {items.length}
       
      </Badge>{' '}</span>


        {/* <span className='cartCount'> <Badge bg="success">Cart Items : {items.length}</Badge>{' '}</span> */}
      </div>
    </div>
  )
}

export default Navbar
