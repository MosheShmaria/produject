import React, { Component } from 'react'
import  {ProductsContext} from "../context"
import ProductList  from '../Components/ProducList'
import Loading from '../Components/Loading'
import { Link } from "react-router-dom";
export default class Category extends Component {
  static contextType =ProductsContext;



   render() {
      let { loading,
         products ,
         smoking,
         accessories,
         gasGrill,
         charcoalGrill, 
         taboons,
         kitchens,
        } =this.context;
    //  const o= products;
    //   console.log(o);
      
     const Products = products.map(product => {
        return <ProductList key={product.id } product={product} 
        
        />
       
     })
     const GasGrill= gasGrill.map(product => {
        return <ProductList key={product.id } product={product} 
        
        />
       
     })
     const Smoking = smoking.map(product => {
        return <ProductList key={product.id } product={product} 
        
        />
       
     })
     const CharcoalGrill =charcoalGrill.map(product => {
        return <ProductList key={product.id } product={product} 
        
        />
       
     })
     const  Taboons =  taboons.map(product => {
        return <ProductList key={product.id } product={product} 
        
        />
       
     })
     const  Kitchens =   kitchens.map(product => {
        return <ProductList key={product.id } product={product} 
        
        />
       
     })
     const Accessories = accessories.map(product => {
        return <ProductList key={product.id } product={product} 
        
        />
       
     })

     
  
     const i= this.props.match.params.category;
      
        return (
          <div className="product-list" >
              <div className="nav-left">
              <Link className="butto "to="/products/כל הקטגרויות ">כל הקטגרויות  </Link>
      <Link className="butto" to="/products/גריל גז">גריל גז </Link>
     <Link className="butto" to="/products/גריל פחמים" >גריל פחמים</Link>
   <Link className="butto" to="/products/מעשנות" >מעשנות</Link>
 <Link className="butto" to="/products/טאבונים" >טאבונים</Link>
  <Link className="butto" to="/products/מטבחי חוץ" >מטבחי חוץ</Link>
 <Link className="butto" to="/products/אביזרים" >אביזרים</Link>
    </div>      
               {loading ? <Loading />: (  
 i==="כל הקטגרויות"?  Products:
 i==="אביזרים"?  Accessories:
 i==="גריל גז"?  GasGrill : 
 i==="מעשנות"? Smoking:
 i==="גריל פחמים"?  CharcoalGrill:
 i==="מטבחי חוץ"?  Kitchens:
 i==="טאבונים"?  Taboons:
   Products)}
            
               
              
               
        
          </div>
          )
   }
      }

