import React from 'react'
import { Link } from "react-router-dom";
export default function Error() {
    return (
        <div>
            <h1> 404 Error</h1>
            <Link to="/" ><ul>דף הבית</ul> </Link>
        </div>
    )
}