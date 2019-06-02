import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <div>
        <Link to="/">Siyu Capital</Link>
        <div>
            <p>These</p>
            <p>are</p>
            <p>links</p>
        </div>
        <button>Logout</button>
    </div>
)

export default Header