const burgerSlide = () =>{
    const burger = document.querySelector('.burger');
    const directory = document.querySelector('.directory');
    const directoryLinks = document.querySelectorAll('.directory li');
//togglar burgern
    burger.addEventListener('click', ()=>{
        directory.classList.toggle('directory-active');

        //animering av länkarna
        directoryLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else{
            link.style.animation = `directoryfade 0.3s ease forwards ${index / 5 + 0.6}s`
            }
            });

//burgare animering
burger.classList.toggle('trans');



    });





}

burgerSlide();