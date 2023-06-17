import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid ">
            <Link to={"/"}> <img className ='logoFede'  src="/img/logoFedeGalara.png" alt="logo" /> </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <nav className="navbar-nav">
                        <ul>
                            <li className='nav-link nav-item cate '>
                            <NavLink to= {'/categoria/1'}className='fuente'> Obra 2017 </NavLink>
                            </li>
                            <li className='nav-link nav-item'>
                            <NavLink to= {'/categoria/2'}className='fuente'>Obra 2018</NavLink>
                            </li>
                            <li className='nav-link nav-item' > 
                            <NavLink to= {'/categoria/3'} className='fuente'> Obra 2019</NavLink>
                            </li>
                            <li className='nav-link nav-item'> 
                            <NavLink to={ '/categoria/4'} className='fuente'> Obra 2020 </NavLink>
                            </li>
                            <li className='nav-link nav-item'> 
                            <NavLink to={ '/categoria/5'} className='fuente'> Obra 2021 </NavLink>
                            </li>
                            <li className='nav-link nav-item'>
                            <NavLink to={'/bio'} className='fuente'> Bio </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <CartWidget />
            </div>
        </header>

    )

}

export default Navbar