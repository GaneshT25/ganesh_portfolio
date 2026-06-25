console.log("Ganesh Tummalapalli Portfolio Loaded");

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    console.log(`Navigating to ${link.textContent}`);
  });
});
