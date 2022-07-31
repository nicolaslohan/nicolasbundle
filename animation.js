
const observer = new IntersectionObserver(entries => {
    console.log(entries);
    Array.from(entries).forEach((entry) => {
        if(entry.intersectionRatio >= 1){
            entry.target.classList.add('init-hidden-off')
        }
    })
}, {
    threshold: [0, .5, 1]
})

Array.from(document.querySelectorAll('.init-hidden')).forEach((element) => {
    observer.observe(element)
})

function bounce_click(){
    Array.from(document.querySelectorAll('#button')).forEach((element)=>{
        element.addEventListener('click', button =>{
            button.target.classList.add('bounce')
            button.offsetHeight
        })
    })
}

function animation(button){
    button.classList.add('bounce')
    reset_animation(button)
}

function reset_animation(button) {
    button.style.animation = 'none';
    button.offsetHeight;
    button.style.animation = null; 
  }
