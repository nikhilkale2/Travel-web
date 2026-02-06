let mm = gsap.matchMedia();
mm.add("(max-width:1024px)", () => {
  let nav = gsap.timeline();

  nav.to("#navLinks", {
    left: 0,
    duration: 0.8,
  });
  nav.from(".mobile-logo", {
    x: -40,
    opacity: 0,
    duration: 0.8,
  });
  nav.from("#navLinks li", {
    x: -60,
    opacity: 0,
    duration: 0.7,
    stagger: 0.3,
  });
  nav.from(".sign-btn", {
    x: -60,
    opacity: 0,
    duration: 0.8,
  });
  nav.from("#navClose", {
    scale: 2,
    duration: 0.9,
    opacity: 0,
  });

  nav.pause();
  let MenuIcon = document.querySelector("#MenuIcon");
  let navClose = document.querySelector("#navClose");

  MenuIcon.addEventListener("click", function () {
    nav.play();
  });
  navClose.addEventListener("click", function () {
    nav.reverse();

    // Hero section
  });
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 20,
  grapCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    addIcons: true,
  },
});
