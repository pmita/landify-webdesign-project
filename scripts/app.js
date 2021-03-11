const burgerButton = document.querySelector('.burger');
const navigationItems = document.querySelector('.nav-links');
const navigationLinks = document.querySelectorAll('.nav-links li');

function burgerSlide(){
    burgerButton.addEventListener('click', () =>{
        console.log('it works');
        navigationItems.classList.toggle('nav-active');

        navigationLinks.forEach((li, index)=>{
            li.style.animation = `navEase 1s ease-in forwards ${index/ 7 + 0.1}s`;
        });
    })
}

burgerSlide();