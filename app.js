const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > navbar.clientHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
