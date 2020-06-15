import React from 'react'

export default function SingleProduct({product}) {

    let {images,price,name} = product;


    return (
        
      <div className='Sproduct' >

<img className='SproudctImage' alt='' src={images[0]}/>

<div className='SproductName'>{name}</div>
<div className='SproductPrice'><label></label>{price}₪</div> 
        {/* <Link to={`/product/${id}`}>הוספה לסל קניות</Link> */}
      </div>
    )
}

