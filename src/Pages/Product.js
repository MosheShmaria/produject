import React, { Component } from 'react'
import  {ProductsContext} from "../context"
import SingleProduct from '../Components/SingleProduct'
export default class Product extends Component {
    static contextType =ProductsContext;
    render() {
        let { products } =this.context;
        console.log(products);
    //    this.formatData=(products)=>{
    //         let tempItems = products.map(item => {
    //             // let id = item.sys.id;
    //             let images = item.images;
    //             let product= {...item.fileds,images}
    //             return product;
    //         })
    //         return tempItems;
    //     }
    //     let  productss = this.formatData(products);

           const i= this.props.match.params.id;
           if(!products){
               return(
                   <h1>Error</h1>
               )
           };

if(products){
           let productss = products.filter(product => product.id === i)
           

            const  productsss =  productss.map(product => {
                return <SingleProduct key={product.id } product={product} 
                
                />
               
             })
            
            

        return (
            <div>
         
  {productsss}

            </div>
        )
    }
}
}