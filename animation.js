const observer = new IntersectionObserver(entries => {
    console.log(entries);
    entries[0].target.classList.add('init-hidden-off');
})
Array.from(document.querySelector('.init-hidden')).forEach(element => 
    observer.observe(document.querySelector(element))
    )
