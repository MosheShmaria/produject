import React from "react"
import '../App.css';
import { Link } from "react-router-dom";

function Categories() {
    return <div className="Categories">

      <Link className="button grilGas"to="/products/גריל גז">גריל גז </Link>
      <Link className="button meahsenet" to="/products/מעשנות" >מעשנות </Link>
      <Link className="button tabon" to="/products/טאבונים" >טאבונים</Link>
      <Link className="button mitbach" to="/products/מטבחי חוץ" >מטבחי חוץ </Link>
      <Link className="button grilPechamim" to="/products/גריל פחמים" >גריל פחמים</Link>
      <Link className="button avizarim" to="/products/אביזרים" >אביזרים</Link>


  
    </div>
}
export default Categories;