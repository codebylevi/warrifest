// COUNTDOWN
// Set the date you're counting down to (December 13, 2025)
const countdownDate = new Date("2025-12-13T00:00:00").getTime();

const countdownEl = document.getElementById("countdown");

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance <= 0) {
    countdownEl.innerHTML = "Countdown Finished!";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `
     ${days}d ${hours}h ${minutes}m ${seconds}s
   `;
};

updateCountdown();
const interval = setInterval(updateCountdown, 1000);

// IMAGE SLIDER
const slider = document.querySelectorAll(".slide");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slider[0].classList.add("current");
  }
};

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// About Inner Visibility
const aboutInnerElements = document.querySelectorAll('.about-inner');

const transit = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // Remove class when out of view
    }
  });
}, {
  threshold: 0.1
});

aboutInnerElements.forEach(el => transit.observe(el));

// Events List
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1 // 10% visibility before triggering
    }
  );

  const eventGroups = document.querySelectorAll(".event-group");
  eventGroups.forEach(el => observer.observe(el));
});

// Mobile Nav
document.querySelector(".mobile-nav").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("show-nav");
});

// Events Beta Transition
// Scroll in-view observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  },
  {
    threshold: 0.2, // Trigger when 20% of the element is visible
  }
);

document
  .querySelectorAll(".events-beta-flex")
  .forEach((el) => observer.observe(el));

  
// Smooth Scrolling
document.addEventListener("DOMContentLoaded", function () {
  // Get all the nav links
  const navLinks = document.querySelectorAll(".nav-link");

  // Add click event listener to each nav link
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent default link behavior

      // Get the target section's id
      const targetId = link.textContent.trim().toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
      const targetSection = document.getElementById(targetId);

      // Scroll to the target section
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});

