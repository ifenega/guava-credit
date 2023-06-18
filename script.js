
const navToggle = document.getElementById('nav-toggle');
let navTransform = false;

//click event for mobile nav bar
function toggleNavTransform() {
    console.log('jam')
    navTransform = !navTransform;
    document.querySelector('.mobile-dropdown').classList.toggle('mobile-dropdown-active')
    document.querySelectorAll('.nav-icon').forEach(icon => icon.classList.toggle('nav-icon-transformed'));
}
navToggle.addEventListener('click', toggleNavTransform)



// Accordion functionality for mobile
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // Toggle the active class on the header
    header.classList.toggle('active');

    // Toggle the display of the accordion content
    const accordionContent = header.nextElementSibling;
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }

    // Toggle the accordion icon and direction
    const accordionIcon = header.querySelector('.accordion-icon');
    if (accordionIcon.classList.contains('closed')) {
      accordionIcon.classList.remove('closed');
      accordionIcon.classList.add('opened');
    } else {
      accordionIcon.classList.remove('opened');
      accordionIcon.classList.add('closed');
    }
  });
});

// Disable accordion functionality for desktop
const mediaQuery = window.matchMedia('(min-width: 1025px)');
if (mediaQuery.matches) {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    // Remove the click event listener from the header
    header.removeEventListener('click', () => {});
    
    // Remove the active class from the header
    header.classList.remove('active');

    // Set the display of the accordion content to block
    const accordionContent = header.nextElementSibling;
    accordionContent.style.display = 'block';

    // Remove the accordion icon
    const accordionIcon = header.querySelector('.accordion-icon');
    accordionIcon.style.display = 'none';
  });
}


const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// Intersection Observer to load images when they enter the viewport
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Set the 'src' attribute from the 'data-src' attribute
      entry.target.src = entry.target.dataset.src;

      // Unobserve the image after it's loaded
      observer.unobserve(entry.target);
    }
  });
});

// Observe each lazy image
lazyImages.forEach(image => {
  imageObserver.observe(image);
});