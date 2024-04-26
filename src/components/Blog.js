import React from "react";
import Navbar from "./Navbar";

function Blog(){
    return(
        <div>
            <Navbar />
            <section class="blog" id="blog">
        <div class="section__container blog__container">
          <h2 class="section__header">BLOGS</h2>
          <div class="blog__grid">
            <div class="blog__card">
              <img src="Gym20.jpg" alt="blog" />
              <h4>Fueling Your Body for Optimal Performance</h4>
            </div>
            <div class="blog__card">
              <img src="Gym21.jpg" alt="blog" height="188px" />
              <h4>A Guide to Setting and Achieving Fitness Goals</h4>
            </div>
            <div class="blog__card">
              <img src="GYm22.jpg" alt="blog" height="188px" />
              <h4>Tips and Techniques for Efficient Exercise</h4>
            </div>
            <div class="blog__card">
              <img src="Gym26.jpg" alt="blog" />
              <h4>A Beginner's Guide to Starting Your Running Journey</h4>
            </div>
          </div>
          <div class="blog__btn">
            <button class="btn btn__primary">VIEW ALL</button>
          </div>
        </div>
      </section>
  
      <section class="section__container logo__banner">
        <img src="Gym30.jpg" alt="banner" height="91px" />
        <img src="Gym32.jpg" alt="banner" height="91px"/>
        <img src="Gym33.jpg" alt="banner" height="91px" />
        <img src="Gym31.jpg" alt="banner" height="91px" />
      </section>
      <div>
            <footer class="footer" id="contact">
        <div class="section__container footer__container">
          <div class="footer__col">
            <div class="footer__logo">
              <a href="#"><img src="Gym2.jpg" alt="logo" /></a>
            </div>
            <p>
              Welcome to FITFAMZ, where we champion the belief that each pathway to wellness is distinctive and empowering.
            </p>
            <ul class="footer__links">
              <li>
                <a href="#">
                  <span><i class="ri-map-pin-2-fill"></i></span>
                  123 Main Street<br />Serenity Gardens, Oasis Lane
                </a>
              </li>
              <li>
                <a href="#">
                  <span><i class="ri-phone-fill"></i></span>
                  +91 9077565489
                </a>
              </li>
              <li>
                <a href="#">
                  <span><i class="ri-mail-fill"></i></span>
                  info@fitfamz.com
                </a>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>GALLERY</h4>
            <div class="gallery__grid">
              <img src="Gym30.jpg" alt="gallery" />
              <img src="Gym31.jpg" alt="gallery"height="53px"/>
              <img src="Gym32.jpg" alt="gallery"height="53px"/>
              <img src="Gym33.jpg" alt="gallery"height="53px"/>
              <img src="Gym5.jpg" alt="gallery" height="53px"/>
              <img src="Gym6.jpg" alt="gallery" height="53px"/>
              <img src="Gym7.jpg" alt="gallery" height="53px"/>
              <img src="Gym8.jpg" alt="gallery" height="53px"/>
              <img src="Gym4.jpg" alt="gallery" height="53px"/>
            </div>
          </div>
          <div class="footer__col">
            <h4>NEWSLETTER</h4>
            <p>
              Stay in the loop with exclusive updates and special deals by subscribing now. Become a part of our vibrant fitness family today!
            </p>
            <form action="/">
              <input type="text" placeholder="Enter Email" />
              <button class="btn btn__primary">SEND</button>
            </form>
            <div class="footer__socials">
              <a href="#"><i class="ri-facebook-fill"></i></a>
              <a href="#"><i class="ri-twitter-fill"></i></a>
              <a href="#"><i class="ri-youtube-fill"></i></a>
            </div>
          </div>
        </div>
        <div class="footer__bar">
          Copyright © 2024 Web Design Project | FITFAMZ. All rights reserved.
        </div>
      </footer>
      </div>
        </div>
    )
}
export default Blog;