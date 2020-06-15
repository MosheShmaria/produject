import React, { Component } from 'react'
import items from './data'
const ProductsContext = React.createContext();
 class ProductsProvider extends Component {
    state={
        products:[],
        smoking:[],
        taboons:[],
        gasGrill:[],
        accessories:[],
        kitchens:[],
        charcoalGrill:[],
        loading:true
    }
    componentDidMount(){

        let  products = this.formatData(items);
        
        let smoking0 = this.filter("smoking");
        let  smoking = this.formatData(smoking0);

        let gasGrill0 = this.filter("gasGrill")
        let  gasGrill = this.formatData(gasGrill0);

        let taboons0 = this.filter("taboons")
        let  taboons = this.formatData(taboons0);

        let kitchens0 = this.filter("kitchens")
        let  kitchens= this.formatData(kitchens0);

        let charcoalGrill0 =  this.filter("charcoalGrill")
        let  charcoalGrill= this.formatData(charcoalGrill0);
        
        let accessories0 =  this.filter("accessories")
        let  accessories= this.formatData(accessories0);
     
        this.setState({
            products,
            smoking,
            taboons,
            gasGrill,
            accessories,
            kitchens,
            charcoalGrill,
            loading : false
        }
        )
    }
    filter (cetegory){
        let filterItems =  items.filter(product => product.category === cetegory)
        return filterItems;
    }
    formatData(items){
        let tempItems = items.map(item => {
            // let id = item.sys.id;

            let id = item.id;
            let images = item.images;
            let product= {...item.fileds,images,id}
            return product;
        })
        return tempItems;
    }
   
    render() {
        return (
         <ProductsContext.Provider value={{...this.state}}>
             {this.props.children}
         </ProductsContext.Provider>
        )
    }
}
const  ProductsConsumer = ProductsContext.Consumer;
export{ ProductsProvider, ProductsConsumer, ProductsContext}
