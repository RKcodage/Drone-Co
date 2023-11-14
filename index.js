/* const navbar = document.querySelector(".header-container");

window.addEventListener("scroll", () => {
    if ()
}); */

const headerBg = document.querySelector(".header-bg-container");
/* let scrollValue =
  (window.scrollY + window.innerHeight) / document.body.offsetHeight;

if (scrollValue > 0.2) {
  headerBg.style.background = "white";
}
 */

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    headerBg.style.background = "rgba(119, 119, 119, 0.6)";
  } else {
    headerBg.style.background = "none";
  }
});
