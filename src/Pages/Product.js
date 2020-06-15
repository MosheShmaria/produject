import React, { Component } from 'react'
import  {ProductsContext} from "../context"
import ProductList  from '../Components/ProducList'
export default class Product extends Component {
    static contextType =ProductsContext;
    render() {
        let { products } =this.context;
        
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
           
console.log(products);

           let productss = products.filter(product => product.id === i)
           

            const  productsss =  productss.map(product => {
                return <ProductList key={product.id } product={product} 
                
                />
               
             })
        return (
            <div>
         
  {productsss}

            </div>
        )
    }
}
