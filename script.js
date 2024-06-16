function navAnimation() {
  var h4Elements = document.querySelectorAll(".nav-middle .nav-elem h4");

  h4Elements.forEach(function (h4) {
    h4.addEventListener("mouseenter", function () {
      let tl = gsap.timeline();

      tl.to("#nav-bottom", {
        height: "23vh",
        duration: 0.5,
      });
      tl.to(".nav-middle h5", {
        display: "block",
        duration: 0.1,
      });
      tl.to(".nav-middle h5 span", {
        y: 0,
        stagger: {
          amount: 0.4,
        },
      });
    });

    h4.addEventListener("mouseleave", function () {
      let tl = gsap.timeline();
      tl.to(".nav-middle h5 span", {
        y: 25,
        stagger: {
          amount: 0.2,
        },
      });
      tl.to(".nav-middle h5", {
        display: "none",
        duration: 0.1,
      });
      tl.to("#nav-bottom", {
        height: 0,
        duration: 0.1,
      });
    });
  });
}

navAnimation();


