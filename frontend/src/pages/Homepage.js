import './Homepage.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
const URL = process.env.REACT_APP_API_URL

export const Homepage = () => {

    return(
        <div className='container'>
            <header>
                <form className='search_form'>
                🛒A-Mia <input type='search' placeholder='Search in A-Mia'></input>
                <button type='submit'>🔍</button>
                </form>
            </header>
            <div className='link_container'>
                <nav>
                    <a href=''>Home</a>
                    <a href=''>About Us</a>
                    <a href=''>Store</a>
                    <a href=''>Categories</a>
                    <a href=''>Deals</a>
                    <a href='/login'>Sign In</a>
                </nav>
            </div>
            <div className='products_container'>
                <div className='hero_products'>
                    <img src="https://picsum.photos/300/200" alt="placeholder" />
                    <img src="https://picsum.photos/300/200" alt="placeholder" />
                </div>
                <h2>Trending Products</h2>
                <div className='trending_products'>
                    <img src="https://picsum.photos/300/200" alt="placeholder" />
                    <img src="https://picsum.photos/300/200" alt="placeholder" />
                    <img src="https://picsum.photos/300/200" alt="placeholder" />
                    <img src="https://picsum.photos/300/200" alt="placeholder" />
                </div>
            </div>
        </div>
    );
};