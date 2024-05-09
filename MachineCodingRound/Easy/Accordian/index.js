


window.addEventListener('load', function() {
    // Code to run when all resources (including images and scripts) are loaded
    var accordions = document.querySelectorAll('.accordion')


    accordions.forEach((accordion, index) => {
        const titleSection = accordion.querySelector('.title-section')
        const description = accordion.querySelector('.description')
        const expand = accordion.querySelector('.expand')
        const collapse = accordion.querySelector('.collapse')

        if(index === 0 ){
          closeAllOtherAccordion(accordion)
          expand.style.display = 'display'
          collapse.style.display = 'none'
        }
        
       
        titleSection.addEventListener('click', function(){
          const expanded = titleSection.getAttribute('aria-expanded') === 'true';
          titleSection.setAttribute('aria-expanded', !expanded);
          const isExpaned = !expanded
          description.style.display = isExpaned ? 'block' : 'none';
          expand.style.display = isExpaned ? 'block' : 'none';
          collapse.style.display = isExpaned ? 'none' : 'block';

          closeAllOtherAccordion(accordion)
        })

    })

    function closeAllOtherAccordion(currentAccordion){
        accordions.forEach(accordion => {
            const description = accordion.querySelector('.description')
            const expand = accordion.querySelector('.expand')
            const collapse = accordion.querySelector('.collapse')
            if(accordion !== currentAccordion){
              description.style.display = 'none'
              expand.style.display = 'none'
              collapse.style.display = 'span'
               
            }
        })
    }
});


569762319