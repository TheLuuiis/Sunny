'use strict'
// <    >  =>

window.addEventListener('DOMContentLoaded', () => {
    ScrollReveal().reveal(".main-header h1", {
        duration: 1200,
        origin: "top",
        distance: "50px",
        scale: 1.1,
        rotate: { x: 20, y: 0, z: 0 },
        easing: "ease-in-out"
      });
    
      ScrollReveal().reveal(".main-header img", {
        duration: 1000,
        origin: "bottom",
        distance: "50px",
        scale: 1.2,
        rotate: { x: 0, y: 0, z: 180 },
        easing: "ease-in-out"
      });
    
      ScrollReveal().reveal(".description-section-1, .description-section-2", {
        duration: 1500,
        origin: "left",
        distance: "80px",
        scale: 1.1,
        rotate: { x: 0, y: 10, z: 0 },
        easing: "ease-out"
      });
    
      ScrollReveal().reveal(".container-img figure", {
        duration: 1500,
        origin: "right",
        distance: "80px",
        scale: 1.1,
        rotate: { x: 0, y: -10, z: 0 },
        easing: "ease-out"
      });
    
      ScrollReveal().reveal(".description-fruit", {
        duration: 1300,
        origin: "bottom",
        distance: "60px",
        scale: 1.1,
        rotate: { x: 10, y: 0, z: 0 },
        easing: "ease-in-out"
      });
    
      ScrollReveal().reveal(".clients .card", {
        duration: 1200,
        interval: 300,
        origin: "bottom",
        distance: "50px",
        scale: 1.05,
        rotate: { x: 0, y: 0, z: 10 },
        easing: "ease-in-out"
      });
    
      ScrollReveal().reveal(".section-meal img", {
        duration: 1200,
        interval: 200,
        origin: "bottom",
        distance: "50px",
        scale: 1.1,
        rotate: { x: 0, y: 0, z: -5 },
        easing: "ease-in-out"
      });
    
      ScrollReveal().reveal(".container-footer", {
        duration: 1500,
        origin: "bottom",
        distance: "50px",
        scale: 1.05,
        rotate: { x: 10, y: 0, z: 0 },
        easing: "ease-in-out"
      });
});