// const buttons = document.querySelectorAll('.faq-toggle');

// buttons.forEach(button => {
//     button.addEventListener('click', ()=>{
//         button.parentNode.classList.toggle('active')
//     })
// })


const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('active')
    })
})