import React from "react";
import Miniproscript from "./Miniproscript";

function Navbar(){
    return(
        <div>
        <Miniproscript />
        <nav>
        <div class="nav__bar">
          <div class="nav__header">
            <div class="nav__logo">
              <a href="#"><img src="Gym2.jpg" alt="logo" height="50px" /></a>
            </div>
            <div class="nav__menu__btn" id="menu-btn">
              <i class="ri-menu-line"></i>
            </div>
          </div>
          <ul class="nav__links" id="nav-links">
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/trainer">TRAINER</a></li>
            <li><a href="/client">CLIENT</a></li>
            <li><a href="/blog">BLOG</a></li>
          </ul>
        </div>
      </nav>
      </div>
    )
}

export default Navbar;