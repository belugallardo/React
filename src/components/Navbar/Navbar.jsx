import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
const Navbar = () => {
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h1>Fede Galará</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <nav className="navbar-nav">
                        <ul>
                            <li className='nav-link nav-item'>Bio</li>
                            <li className='nav-link nav-item'>Statement</li>
                            <li className='nav-link nav-item' >Obra</li>
                            <li className='nav-link nav-item'>Shop</li>
                        </ul>
                    </nav>
                </div>
                <CartWidget />
            </div>
        </header>

    )

}

export default Navbar