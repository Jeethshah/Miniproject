import React from "react";
import Navbar from "./Navbar";

function About(){
    return(
        <div>
            <Navbar />
      <section class="section__container about__container" id="about">
        <div class="about__header">
          <h2 class="section__header">ABOUT US</h2>
          <p class="section__description">
            Our mission is to promote longevity and enhance quality of life through dynamic fitness and health.
          </p>
        </div>
        <div class="about__grid">
          <div class="about__card">
            <h4>COACHES AND TRAINERS</h4>
            <p>
              It takes someone with a vision of the possibilities to attain new levels of experience. For exactly this we have the best coaches and trainers
            </p>
          </div>
          <div class="about__card">
            <h4>BEST PRICES</h4>
            <p>
              We give the best prices in addition to many more discounts and membership coupons.
            </p>
          </div>
          <div class="about__card">
            <h4>MODERN EQUIPMENTS</h4>
            <p>
              Stay ahead of the curve with our modern GenZ eqipments crafted with the latest technology.
            </p>
          </div>
        </div>
      </section>
  
      <section class="session">
        <div class="session__card">
          <h4>BODY BUILDING</h4>
          <p>
            Sculpt your physique and build muscle mass with our specialized
            bodybuilding programs at FITFAMZ.
          </p>
          <button class="btn btn__secondary">
            READ MORE <i class="ri-arrow-right-line"></i>
          </button>
        </div>
        <div class="session__card">
          <h4>CARDIO</h4>
          <p>
            Elevate your heart rate and boost your endurance with our dynamic
            cardio workouts at FITFAMZ.
          </p>
          <button class="btn btn__secondary">
            READ MORE <i class="ri-arrow-right-line"></i>
          </button>
        </div>
        <div class="session__card">
          <h4>FITNESS</h4>
          <p>
            Embrace a holistic approach to fitness with our comprehensive fitness
            programs at FITFAMZ.
          </p>
          <button class="btn btn__secondary">
            READ MORE <i class="ri-arrow-right-line"></i>
          </button>
        </div>
        <div class="session__card">
          <h4>CROSSFIT</h4>
          <p>
            Experience the ultimate full-body workout with our intense CrossFit
            classes at FITFAMZ.
          </p>
          <button class="btn btn__secondary">
            READ MORE <i class="ri-arrow-right-line"></i>
          </button>
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

export default About;