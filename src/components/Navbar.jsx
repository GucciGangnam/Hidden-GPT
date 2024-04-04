// IMPORTS 
// RRD 
import { Route, Routes } from 'react-router-dom'

// Hooks
import { useState, useEffect } from 'react';

// Styles 
import './Navbar.css'

// Components


// COMPOENT //
export const Navbar = () => {

    return (
        <div className='Navbar'>
            <div className='Navbar-left'>
                <div className='Logo'>
                    <img src='/Microsoft.png' alt='Microsoft Logo'></img>
                    Microsoft
                </div>
                <button style={{ fontSize: '18px' }} className='Navbar-BTN'><strong>Supoprt</strong></button>
                <button className='Navbar-BTN'>Microsoft 365</button>
                <button className='Navbar-BTN'>Office</button>
                <button className='Navbar-BTN'>Products</button>
                <button className='Navbar-BTN'>More</button>
                <button className='Navbar-BTN' style={{ fontWeight: '900', border: '1px solid black', borderRadius: '4px', padding: '8px', maxHeight: '31px', minWidth: '125px' }}>
                    Buy Microsoft 365
                </button>
            </div>

        </div >

    )
}