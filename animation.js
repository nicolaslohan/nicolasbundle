function bounce_click() {
    Array.from(document.querySelectorAll('#button')).forEach((element) => {
        element.addEventListener('click', button => {
            button.target.classList.add('bounce')
            button.offsetHeight
        })
    })
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