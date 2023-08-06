import React from 'react'
import './logo.css'

const Logo = () => {
    return (
        <div className='logo-div'>
            <div className='main'>
                <div className='stripes-left'></div>
                <div className='stripes-center'></div>
                <div className='stripes-right'></div>
                <div className='logo'>
                    <div className='left-inner-stripe'></div>
                    <div className='right-inner-stripe'></div>
                </div>
            </div>
            <div className='logo-name'>
                <h1>Wamsutta</h1>
            </div>
            <div className='bottom-line'></div>
            <div className='since-date'>
                <h2>Since 1846</h2>
            </div>
        </div>
    )
}

export default Logo