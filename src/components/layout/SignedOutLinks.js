import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/signup'>Реєстрація</NavLink></li>
            <li><NavLink to='/signin'>Увійти</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;