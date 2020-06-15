import React from 'react'

import {Link} from "react-router-dom"
export default function ProductList({product}) {

    let {images,id,price,name} = product;

console.log(id);
    return (
        
      <div className='product' >

<img className='proudctImage' alt='' src={images[0]}/>

<div className='productName'>{name}</div>
<div className='productPrice'><label></label>{price}₪</div> 
        <Link to={`/product/${id}`}>פרטים</Link>
      </div>
    )
}




