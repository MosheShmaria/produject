import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header';
import Home from "./Pages/Home"
import Category from "./Pages/Category"
import Contect from "./Pages/Contect"
import Blog from "./Pages/Blog"
import  About from "./Pages/About"
import Error from "./Pages/Error"
import Footer from './Components/Footer';
import { ProductsProvider} from './context'
function App() {
  return <ProductsProvider>
    <Header />
    <Switch>
      <Route exact path='/'  component={Home} />
      <Route exact  path='/products/:category' component={Category} />
      <Route exact path='/contect'  component={Contect} />
      <Route exact path='/blog'  component={Blog} />
      <Route exact path='/about'  component={About} />
      <Route component={Error} /> 
    </Switch>
 
    <Footer/>

  </ProductsProvider>
}



export default App;
