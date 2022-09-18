const oberv = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })

})
const hiddenElems = document.querySelectorAll('.hidden');
hiddenElems.forEach((elem) => oberv.observe(elem));