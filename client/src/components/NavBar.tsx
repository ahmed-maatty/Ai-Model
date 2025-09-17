import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <nav>
      <div className="container">
        <main className='nav_content'>
          <Link href={"/"} className='logo' >Oscar</Link>
          <div className='nav_links'>
            <Link href={"/#aboutUs"}>About US</Link>
            <Link href={"/#contactUs"}>Contact US</Link>
            <Link href={"/login"} className='loginBtn'>Login</Link>
          </div>
        </main>
      </div>
    </nav>
  )
}

export default NavBar