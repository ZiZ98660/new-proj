let img3 = document.querySelector('div.about-img>div>a>img');
let img1 = document.querySelector('div.about-img>a>img.one');
let img2 = document.querySelector('div.about-img>a>img.two');
let img4 = document.querySelector('div.about-img>a>img.four');
let img5 = document.querySelector('div.about-img>a>img.five');
let tglbtn= document.querySelector('.navbar-toggler');
let list = document.querySelector('.navbar-nav')
let div = document.querySelector('.navbar-collapse')

img1.addEventListener('click', focusOne);
img2.addEventListener('click', focusTwo);
img3.addEventListener('click', focusThree);
img4.addEventListener('click', focusFour);
img5.addEventListener('click', focusFive);
tglbtn.addEventListener('click', toggle);

window.addEventListener('resize', ()=>{
    if(window.innerWidth >991.5){          
        firstSect.removeAttribute('id', 'respond')
    }else{
        firstSect.setAttribute('id', 'respond')
        div.classList.add('class', 'show')
    }
})

tglbtn.addEventListener('dblclick', ()=>{
    firstSect.removeAttribute('id', 'respond')
    div.classList.remove('class', 'show')

    
})

let firstSect = document.querySelector('.first-sect')


function toggle(){ 
    if(window.innerWidth <= 991.5){          
        firstSect.setAttribute('id', 'respond')
        div.classList.add('class', 'show')
    }

    
}


function focusOne(e){
    e.preventDefault()
    img1.setAttribute('id', 'active')
    img2.removeAttribute('id', 'active')
    img3.removeAttribute('id', 'active')
    img4.removeAttribute('id', 'active')
    img5.removeAttribute('id', 'active')

    
}
function focusTwo(e){
    e.preventDefault()
    img1.removeAttribute('id', 'active')
    img2.setAttribute('id', 'active')
    img3.removeAttribute('id', 'active')
    img4.removeAttribute('id', 'active')
    img5.removeAttribute('id', 'active')
    
}

function focusThree(e){
    e.preventDefault()
    img1.removeAttribute('id', 'active')
    img2.removeAttribute('id', 'active')
    img3.setAttribute('id', 'active')
    img4.removeAttribute('id', 'active')
    img5.removeAttribute('id', 'active')
    
}

function focusFour(e){
    e.preventDefault()
    img1.removeAttribute('id', 'active')
    img2.removeAttribute('id', 'active')
    img3.removeAttribute('id', 'active')
    img4.setAttribute('id', 'active')
    img5.removeAttribute('id', 'active')
    
}

function focusFive(e){
    e.preventDefault()
    img1.removeAttribute('id', 'active')
    img2.removeAttribute('id', 'active')
    img3.removeAttribute('id', 'active')
    img4.removeAttribute('id', 'active')
    img5.setAttribute('id', 'active')
}

