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

