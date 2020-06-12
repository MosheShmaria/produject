import React from 'react'

import {Link} from "react-router-dom"
export default function NavBlog({product}) {

    let {images,slug,price,name} = product;

// console.log(images);
    return (
        
      <div className='product' >

<img className='proudctImage' alt='' src={images[0]}/>

<div className='productName'>{name}</div>
<div className='productPrice'><label></label>{price}₪</div> 
        <Link to={`/apartment/${slug}`}>פרטים</Link>
      </div>
    )
}




