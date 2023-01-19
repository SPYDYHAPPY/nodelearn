import React from 'react';
import './Header.css';

const Header = () => {
    const clickMe = (name, event) => {
        console.log('Hello :' + name);
    }
    return (
        <div>
            <h2>This is Header Component</h2>
            <button className='button-18' onClick={() => clickMe('Debasish')}>click me</button>
        </div>
    )
}

export default Header