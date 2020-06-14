import React, {Component} from "react"
import { Link } from "react-router-dom";

class Nav extends Component {
// let active=false;
state={
    Active:false
}

hendleNav = ()=>{
    this.setState({Active:!this.state.Active })
}

render() {
    
    

    return ( <div>
        <nav>
            <ul>
            
            <Link to="/" ><li>דף הבית</li> </Link>
            <Link to="/about" ><li>אודות</li> </Link>
            <li className="summary">
            <div >
<div onClick={this.hendleNav}>קטגוריות </div>
{ this.state.Active ?
  <div className="list" onClick={this.hendleNav}>
  <li> <Link to="/products/הכל" >הכל</Link></li>
  <li>  <Link to="/products/גריל גז">גריל גז </Link></li>
  <li> <Link to="/products/גריל פחמים" >גריל פחמים</Link></li>
  <li> <Link to="/products/מעשנות" >מעשנות</Link></li>
  <li> <Link to="/products/טאבונים" >טאבונים</Link></li>
  <li> <Link to="/products/מטבחי חוץ" >מטבחי חוץ</Link></li>
  <li> <Link to="/products/אביזרים" >אביזרים</Link></li>
  </div>  : null} 
</div>
</li>

         
             {/* <li><select value="קטגוריות">
<option > גריל גז</option>
<option><Link to="/blog" ><ul>מעשנות</ul> </Link></option>
             <option><Link to="/" ><ul>טאבונים</ul> </Link></option>
             <option> <Link to="/" ><ul>מטבחי חוץ</ul> </Link></option>
             <option ><Link to="/" ><ul>אביזרים</ul> </Link></option>
   </select> */}
            
            <Link to="/contect" >  <li>צור קשר</li> </Link>
            <Link to="/blog/:id" > <li>בלוג</li> </Link>
            </ul>
        </nav>
    </div>
    )}
}
export default Nav;