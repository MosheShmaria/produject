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
        // console.log(items);
       
        let  products = this.formatData(items);
        // console.log(products);
     
        let smoking0 = items.filter(product => product.category === "smoking")
        let  smoking = this.formatData(smoking0);
        console.log(smoking);

        let gasGrill0 =  items.filter(product => product.category === "gasGrill")
        let  gasGrill = this.formatData(gasGrill0);
        console.log(gasGrill);


        let taboons0 =  items.filter(product => product.category === "taboons")
        let  taboons = this.formatData(taboons0);
        console.log(taboons);



        let kitchens0 =  items.filter(product => product.category === "kitchens")
        let  kitchens= this.formatData(kitchens0);
        console.log(kitchens);

       
        let charcoalGrill0 =  items.filter(product => product.category === "charcoalGrill")
        let  charcoalGrill= this.formatData(charcoalGrill0);
        console.log(charcoalGrill);

        let accessories0 =  items.filter(product => product.category === "accessories")
        let  accessories= this.formatData(accessories0);
        console.log(accessories);
        
 
        // 2:04
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
        //   console.log(apartments);
    }
    
    formatData(items){
        let tempItems = items.map(item => {
            // let id = item.sys.id;

            let id = item.sys.id;
            let images = item.images;
            let product= {...item.fileds,images,id}
                // ,id
            
            // console.log(product);
            
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
