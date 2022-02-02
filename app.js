(() => {
    function slidesPlugin(activeSlide = 3){
        const slides = document.querySelectorAll('.slide');
        console.log (slides);
        
        slides[activeSlide].classList.add('active')
        
        for (const slide of slides) {
            slide.addEventListener('click', () => {
                clearActiveClasses()
                slide.classList.add('active')
            })    
        }
        function clearActiveClasses() {
            slides.forEach((slide) => {
                slide.classList.remove('active')
            })
        }
    }
    slidesPlugin();
})();
//drag drop//
(() => {
    const item = document.querySelector('.item');
    console.log(item);
    const placeholders = document.querySelectorAll('.placeholder');
    console.log(placeholders);
    
    item.addEventListener('dragstart', dragstart);
    item.addEventListener('dragend', dragend);
    
    for (const placeholder of placeholders){
        placeholder.addEventListener('dragover', dragover)
        placeholder.addEventListener('dragenter', dragenter)
        placeholder.addEventListener('dragleave', dragleave)
        placeholder.addEventListener('drop', drop)
    } 
    
    function dragstart(event){
        event.target.classList.add('hold')
        setTimeout(() => event.target.classList.add('hide'))
    };
    function dragend(event){
        event.target.classList.remove('hold', 'hide')
    };
    
    function dragover(event){
        event.preventDefault()
    }
    
    function dragenter(event){
        event.target.classList.add('hovered')
    }
    
    function dragleave(event){
        event.target.classList.remove('hovered')
    }
    
    function drop(event){ 
        event.target.append(item)
        event.target.classList.remove('hovered')
    }    
})();
(() => {
const upBtn = document.querySelector('.up-button');

const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');

const mainSlide = document.querySelector('.main-slide');

const slidesCount = mainSlide.querySelectorAll('div').length;

const container = document.querySelector('.container');

const height = container.clientHeight; 

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

let activeSlideIndex = 0;

function changeSlide (direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        }
    }else if (direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    
    
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
    
}

upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})
})();