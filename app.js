const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > navbar.clientHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

AOS.init({
  duration: 1000,
  once: true,
});

const completedTab = document.getElementById("pills-completed-tab");
const inProgressTab = document.getElementById("pills-in-progress-tab");

completedTab.addEventListener("click", function () {
  setTimeout(function () {
    AOS.refreshHard();
  }, 500);
});

inProgressTab.addEventListener("click", function () {
  setTimeout(function () {
    AOS.refreshHard();
  }, 500);
});
