import React, { useState } from 'react';
import ScrollReveal from 'scrollreveal';
import Swiper from 'swiper';

const Miniproscript = () => {
  // State to manage whether the navigation menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the navigation menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the navigation menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Apply ScrollReveal animation when component mounts
  React.useEffect(() => {
    // Define options for ScrollReveal animations
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    // Apply ScrollReveal animation to header content elements
    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
    });
    ScrollReveal().reveal(".header__content h2", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".header__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".header__content .header__btn", {
      ...scrollRevealOption,
      delay: 1500,
    });
    // Apply ScrollReveal animation to about section cards
    ScrollReveal().reveal(".about__card", {
      duration: 1000,
      interval: 500,
    });
    // Apply ScrollReveal animation to trainer section cards
    ScrollReveal().reveal(".trainer__card", {
      ...scrollRevealOption,
      interval: 500,
    });
    // Apply ScrollReveal animation to blog section cards
    ScrollReveal().reveal(".blog__card", {
      ...scrollRevealOption,
      interval: 500,
    });

    // Initialize Swiper for carousel functionality
    const swiper = new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });

    // Clean up ScrollReveal and Swiper instances when component unmounts(Removing component from DOM preventing memory leaks)
    return () => {
      swiper.destroy();
      ScrollReveal().destroy();
    };
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

};

export default Miniproscript;
