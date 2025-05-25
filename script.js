const images = document.querySelectorAll('.header-slider ul img');
const previousBtn = document.querySelector('.control_prev');
const nextBtn = document.querySelector('.control_next');

let n = 0;
function slide() {
    for(let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[n].style.display = 'block';
}

slide();

previousBtn.addEventListener('click', function(e) {
    if(n > 0) {
        n--
    } else {
        n = images.length -1;
    }
    slide();
});

nextBtn.addEventListener('click', function(e) {
    if(n < images.length - 1) {
        n++
    } else {
        n = 0
    }
    slide();
});

// const scrollContainer = document.querySelectorAll('.products');
// for(const item of scrollContainer) {
//     item.addEventListener('wheel', (event)=>{
//         event.preventDefault();
//         item.scrollLeft += event.deltaY;
//     });
// }