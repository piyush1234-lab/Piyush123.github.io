// Carousel Logic
    const slides = document.querySelector('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let index = 0;

    function showSlide(i) {
      slides.style.transform = `translateX(${-i * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active-dot'));
      dots[i].classList.add('active-dot');
    }

    function nextSlide() {
      index = (index + 1) % dots.length;
      showSlide(index);
    }

    setInterval(nextSlide, 3000);

    function dottouch(i) {
      index = i;
      showSlide(index);
    }

    // Verse Logic
    const verses = document.querySelectorAll(".verse");
    let currentVerse = 0;

    function showVerse(newIndex, direction) {
      if (newIndex === currentVerse) return;
      const current = verses[currentVerse];
      const next = verses[newIndex];

      current.style.transition = "transform 0.6s ease, opacity 0.6s ease";
      current.style.transform = direction === "next" ? "translateX(-100%)" : "translateX(100%)";
      current.style.opacity = "0";

      next.style.display = "block";
      next.style.transition = "none";
      next.style.transform = direction === "next" ? "translateX(100%)" : "translateX(-100%)";
      next.style.opacity = "0";
      void next.offsetWidth;

      next.style.transition = "transform 0.6s ease, opacity 0.6s ease";
      next.style.transform = "translateX(0)";
      next.style.opacity = "1";

      setTimeout(() => {
        current.style.display = "none";
      }, 600);

      currentVerse = newIndex;
    }

    function next() {
      let newIndex = (currentVerse + 1) % verses.length;
      showVerse(newIndex, "next");
    }

    function prev() {
      let newIndex = (currentVerse - 1 + verses.length) % verses.length;
      showVerse(newIndex, "prev");
    }

    // Touch effect handlers
    function tou1(elem) {
      elem.style.background = "white";
      elem.style.color = "#111";
      elem.style.transform = "scale(1.05)";
    }

    function touend1(elem) {
      elem.style.background = "rgba(255, 255, 255, 0.15)";
      elem.style.color = "white";
      elem.style.transform = "scale(1)";
    }
        function tou11(elem) {
      elem.style.background = "white";
      elem.style.color = "#111";
      
    }

    function touend11(elem) {
      elem.style.background = "rgba(255, 255, 255, 0.15)";
      elem.style.color = "white";
      
    }
    function sca(elem){
        elem.style.transform="scale(0.9)";
    }
    function desca(elem){
        elem.style.transform="scale(1)";
    }