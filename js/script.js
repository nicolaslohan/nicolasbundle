window.onload = () => {
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
}

function animation(button) {
    button.classList.add('bounce')
    reset_animation(button)
}

function reset_animation(button) {
    button.style.animation = 'none';
    button.offsetHeight;
    button.style.animation = null;
}

const hidden = document.querySelectorAll('section');
const fadeOptions = {
    root: null,
    rootMargin: "0px"
  };

  hidden.forEach(element => {
    element.classList.add('loadin');
  })

  const fadeObserver = new IntersectionObserver(function (entries, onScreen) {
    Array.from(entries).forEach(entry => {

        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('loaded');
        }
        else{
            entry.target.classList.remove('loaded');
        }
    })
}, fadeOptions);


hidden.forEach(element => {
    fadeObserver.observe(element)
})


const nav = document.querySelector(".navbar");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

function handleButtonClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  event.stopPropagation();
  nav.classList.toggle("active");
  handleClickOutside(menu, () => {
    nav.classList.remove("active");
    setAria();
  });
  setAria();
}

function handleClickOutside(targetElement, callback) {
  const html = document.documentElement;
  function handleHTMLClick(event) {
    if (!targetElement.contains(event.target)) {
      targetElement.removeAttribute("data-target");
      html.removeEventListener("click", handleHTMLClick);
      html.removeEventListener("touchstart", handleHTMLClick);
      callback();
    }
  }
  if (!targetElement.hasAttribute("data-target")) {
    html.addEventListener("click", handleHTMLClick);
    html.addEventListener("touchstart", handleHTMLClick);
    targetElement.setAttribute("data-target", "");
  }
}

function setAria() {
  const isActive = nav.classList.contains("active");
  btnMenu.setAttribute("aria-expanded", isActive);
  if (isActive) {
    btnMenu.setAttribute("aria-label", "Close Menu");
  } else {
    btnMenu.setAttribute("aria-label", "Open Menu");
  }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);