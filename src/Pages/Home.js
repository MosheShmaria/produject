import React from "react"
import '../App.css';
import Front from "../Components/Front"
import Categories from "../Components/Categories";
function Home() {
    return <div className="Home">
      <Front />
      <Categories />
    </div>
}
export default Home;