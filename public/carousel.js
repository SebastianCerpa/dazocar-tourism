document.addEventListener('DOMContentLoaded', function() {
  // Wait for a small delay to ensure hydration is complete
  setTimeout(() => {
    initCarousel();
  }, 100);
  
  function initCarousel() {
    const track = document.getElementById('destinationCarousel');
    if (!track) return; // Safety check
    
    const slides = Array.from(track.getElementsByClassName('carousel-slide'));
    const dots = Array.from(document.getElementById('carouselDots')?.getElementsByClassName('carousel-dot') || []);
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    const slidesToShow = window.innerWidth > 992 ? 3 : window.innerWidth > 768 ? 2 : 1;
    const totalSlides = slides.length;
    
    // Set initial position
    updateCarousel();
    
    // Add event listeners
    prevButton?.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });
    
    nextButton?.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    });
    
    // Add dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });
    
    // Update carousel position and active dot
    function updateCarousel() {
      const slideWidth = slides[0].offsetWidth + 32; // Width + gap
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      
      // Update active dot
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
    
    // Auto-advance carousel
    let autoplayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }, 5000);
    
    // Pause autoplay on hover
    track.addEventListener('mouseenter', () => {
      clearInterval(autoplayInterval);
    });
    
    track.addEventListener('mouseleave', () => {
      autoplayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
      }, 5000);
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
      updateCarousel();
    });
  }
});