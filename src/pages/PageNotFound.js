import React from 'react';
import ic_notfound from "../images/ic_notfound.svg";


function PageNotFound() {
  return (
    <div>
    <h1 className='center'>Oops..!</h1>
      <p className='center fontBold'>Looks like you came to wrong page on our server</p>
      <img className="center" src={ic_notfound}   alt="not found"/>
                   
    </div>
  )
}

export default PageNotFound
