const portvar=document.querySelectorAll('.item')
portvar.forEach(i =>{
    i.addEventListener('mouseover',() =>{
        i.childNodes[1].classList.add('img-darken');
    })
    i.addEventListener('mouseout',() =>{
        i.childNodes[1].classList.remove('img-darken');
    })

})
