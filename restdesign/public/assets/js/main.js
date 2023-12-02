const showMenu = (e, t) => {
  const o = document.getElementById(e),
    n = document.getElementById(t);
  o &&
    n &&
    o.addEventListener("click", () => {
      n.classList.toggle("show-menu");
    });
};
showMenu("nav-toggle", "nav-menu");
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const e = document.getElementById("nav-menu");
  e.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  var n = window.pageYOffset;
  sections.forEach((e) => {
    var t = e.offsetHeight,
      o = e.offsetTop - 50;
    (sectionId = e.getAttribute("id")),
      o < n && n <= o + t
        ? document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.add("active-link")
        : document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
  });
}
function scrollHeader() {
  const e = document.getElementById("header");
  200 <= this.scrollY
    ? e.classList.add("scroll-header")
    : e.classList.remove("scroll-header");
}
function scrollTop() {
  const e = document.getElementById("scroll-top");
  560 <= this.scrollY
    ? e.classList.add("show-scroll")
    : e.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollActive),
  window.addEventListener("scroll", scrollHeader),
  window.addEventListener("scroll", scrollTop);
const themeButton = document.getElementById("theme-button"),
  darkTheme = "dark-theme",
  iconTheme = "bx-sun",
  selectedTheme = localStorage.getItem("selected-theme"),
  selectedIcon = localStorage.getItem("selected-icon"),
  getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light",
  getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";
selectedTheme &&
  (document.body.classList["dark" === selectedTheme ? "add" : "remove"](
    darkTheme,
  ),
  themeButton.classList["bx-moon" === selectedIcon ? "add" : "remove"](
    iconTheme,
  )),
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme),
      themeButton.classList.toggle(iconTheme),
      localStorage.setItem("selected-theme", getCurrentTheme()),
      localStorage.setItem("selected-icon", getCurrentIcon());
  });
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2e3,
  reset: !0,
});
sr.reveal(
  ` .home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`,
  {
    interval: 200,
  },
);
