import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Header = () => {

  return (
    <div>
      <header>
        <nav id='navbar'>
          <div>
            <a href='./'><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"></img></a>

          </div>
          <div class="box">
            <input type="text" placeholder='search for products ,brands and more'/>
            <i class="fa-solid fa-magnifying-glass"></i>

          </div>
          <div id='loginbtn'>
            <button>Login</button>
          </div>
          <div id='AchorTag'>
            <a href="">Become a seller</a>
            <a href="./Products">Products</a>
            <a href="./Cart"><i class="fa-solid fa-cart-shopping"></i>Carts</a>
          </div>

        </nav>
      </header>
        
    </div>
  )
}

export default Header