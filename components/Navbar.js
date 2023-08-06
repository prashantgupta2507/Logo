import React from 'react'
import WamsuttaLogo from './wamsutta_logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div style={{padding:'2vh'}}>
        <Image src={WamsuttaLogo} style={{objectFit:'contain' , height:'15vh', width:'15vh'}} />
    </div>
  )
}

export default Navbar