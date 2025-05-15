import React, { useState } from 'react'

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <header>

            <div className="header container">
                <div className='logo-container'>
                    <img src="../../public/ichiraku-ramen.png" alt="company-logo" />
                </div>

                <div className='nav-items'>
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>CONTACT</li>
                        <li>CART <i className="fa-solid fa-cart-shopping"></i></li>
                        <li><button type='button' className='login-btn' onClick={()=>{
                            setIsLoggedIn(prev=>!prev)
                        }}>{!isLoggedIn ? "Log in":"Log out"}</button></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header