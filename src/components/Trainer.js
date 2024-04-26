import React from "react";
import Navbar from "./Navbar";

function Trainer(){
    return(
        <div>
            <Navbar />
            <section class="section__container trainer__container" id="trainer">
        <h2 class="section__header">MEET OUR TRAINERS</h2>
        <div class="trainer__grid">
          <div class="trainer__card">
            <img src="Gym3.jpg" alt="trainer" />
            <h4>CHRIS WILLIAMS</h4>
            <p>Body Builder Coach</p>
            <div class="trainer__socials">
              <a href="#"><i class="ri-facebook-fill"></i></a>
              <a href="#"><i class="ri-twitter-fill"></i></a>
              <a href="#"><i class="ri-youtube-fill"></i></a>
            </div>
          </div>
          <div class="trainer__card">
            <img src="Gym13.jpg" alt="trainer" />
            <h4>ROSY WILLIAMS</h4>
            <p>Cardio Coach</p>
            <div class="trainer__socials">
              <a href="#"><i class="ri-facebook-fill"></i></a>
              <a href="#"><i class="ri-twitter-fill"></i></a>
              <a href="#"><i class="ri-youtube-fill"></i></a>
            </div>
          </div>
          <div class="trainer__card">
            <img src="Gym9.jpg" alt="trainer" />
            <h4>MATT HARRIS</h4>
            <p>Fitness Coach</p>
            <div class="trainer__socials">
              <a href="#"><i class="ri-facebook-fill"></i></a>
              <a href="#"><i class="ri-twitter-fill"></i></a>
              <a href="#"><i class="ri-youtube-fill"></i></a>
            </div>
          </div>
          <div class="trainer__card">
            <img src="Gym14.jpg" alt="trainer" />
            <h4>SOFIA CHRISIAN</h4>
            <p>Crossfit Coach</p>
            <div class="trainer__socials">
              <a href="#"><i class="ri-facebook-fill"></i></a>
              <a href="#"><i class="ri-twitter-fill"></i></a>
              <a href="#"><i class="ri-youtube-fill"></i></a>
            </div>
          </div>
        </div>
      </section>
  
      <section class="membership">
        <div class="section__container membership__container">
          <h2 class="section__header">MEMBERSHIP</h2>
          <div class="membership__grid">
            <div class="membership__card">
              <h4>Essential Elevation</h4>
              <ul>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Begin your fitness odyssey with access to our gym floor and essential equipment.
                </li>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Dive into a diverse array of group fitness sessions, from yoga to Zumba and Pilates.
                </li>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Harness the power of complimentary fitness consultations to chart your path to success.
                </li>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Refresh and recharge in our luxe locker room facilities and invigorating showers.
                </li>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Savor expert nutritional guidance and complimentary snacks.
                </li>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Unlock exclusive member discounts on a curated selection of merchandise.
                </li>
              </ul>
              <h3><sup>$</sup>40<span>/month</span></h3>
              <button class="btn btn__primary">BUY NOW</button>
            </div>
            <div class="membership__card">
              <h4>Refined Regimen</h4>
              <ul>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Ascend to greater heights with all the privileges of Essential Elevation and beyond.
                </li>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Secure priority booking for bespoke training sessions, optimizing your fitness journey.
                </li>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Explore our advanced equipment, meticulously designed to amplify your workouts.
                </li>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Continue to benefit from complimentary fitness consultations, guiding your progress.
                </li>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Participate in exclusive member gatherings and enriching workshops.
                </li>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Access discounts on additional gym services.
                </li>
              </ul>
              <h3><sup>$</sup>65<span>/month</span></h3>
              <button class="btn btn__primary">BUY NOW</button>
            </div>
            <div class="membership__card">
              <h4>Supreme Sanctuary</h4>
              <ul>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Achieve the zenith of fitness opulence with access to our premium amenities.
                </li>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Opt for reserved parking or indulge in valet service for an effortless arrival.
                </li>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Partake in premium fitness classes at no extra cost, tailored to elevate your regimen.
                </li>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Receive bespoke workout plans crafted by our fitness mavens to realize your unique goals.
                </li>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Enjoy priority access to guest passes and exclusive events, enhancing your gym experience.
                </li>
                <li>
                  <span><i class="ri-check-line"></i></span>
                  Indulge in rejuvenating post-workout massages, ensuring total relaxation and recovery.
                </li>
              </ul>
              <h3><sup>$</sup>85<span>/month</span></h3>
              <button class="btn btn__primary">BUY NOW</button>
            </div>
          </div>
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

export default Trainer;