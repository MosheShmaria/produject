import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
    return (
        <div className="footer">
                <ul className="footer-links">
            <Link to="/" ><li>דף הבית</li> </Link>
            <Link to="/odot" ><li>אודות</li> </Link>
            <Link to="/contect" >  <li>צור קשר</li> </Link>
            <Link to="/blog" > <li>בלוג</li> </Link>
            </ul>
            <div className="footerImg">
                <div className="Logo">amiry</div>
            </div>
        </div>
    )
}
