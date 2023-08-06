import React from 'react'
import './ShopNowButton.css'
const ShopNowButton = () => {
  return (
    <button className="cta">
        <span className="hover-underline-animation"> Shop now </span>
        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
        </svg>
    </button>
  )
}

export default ShopNowButton