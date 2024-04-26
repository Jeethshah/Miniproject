import React from "react";
import Navbar from "./Navbar";

function Client(){
    return(
        <div>
            <Navbar />
            <section class="section__container client__container" id="client">
        <h2 class="section__header">OUR TESTIMONIALS</h2>
        
        <div class="swiper">
          
          <div class="swiper-wrapper">
        
            <div class="swiper-slide">
              <div class="client__card">
                <img src="Gym16.jpg" alt="client" />
                <div><i class="ri-double-quotes-r"></i></div>
                <p>
                  I've tried countless gyms, but none compare to the results I've achieved at FITFAMZ. The trainers push you to your limits and beyond, and the sense of community keeps me motivated every day.
                </p>
                <h4>Rachel Johnson</h4>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="client__card">
                <img src="Gym15.jpg" alt="client" />
                <div><i class="ri-double-quotes-r"></i></div>
                <p>
                  FITFAMZ is more than just a gym, it's a lifestyle. The trainers are incredibly knowledgeable, the facilities top-notch, and the camaraderie among members is unparalleled. I've never felt stronger or more confident.
                </p>
                <h4>John D</h4>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="client__card">
                <img src="Gym17.jpg" alt="client" />
                <div><i class="ri-double-quotes-r"></i></div>
                <p>
                  FITFAMZ has transformed my body and my mindset. The personalized approach to training has helped me surpass my fitness goals faster than I ever thought possible. I'm forever grateful for the support and encouragement from the FITFAMZ team.
                </p>
                <h4>Alex B</h4>
              </div>
            </div>
          </div>
          
          <div class="swiper-pagination"></div>
        </div>
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

export default Client;