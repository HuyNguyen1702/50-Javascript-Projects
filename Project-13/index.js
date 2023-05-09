const textarea = document.getElementById('textarea');
const tagsEl = document.getElementById('tags');


textarea.focus();

textarea.addEventListener('keyup', (e)=> {
    createTag(e.target.value);

    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value = '';
        },10)
        randomSelect();
    }
})


function createTag(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    
    tagsEl.innerHTML = '';

    tags.forEach(element => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = element;
        tagsEl.appendChild(tagEl);
    });
}


function randomSelect(){
    const times = 30;

    const interval = setInterval(()=>{
        const randomTag = pickRandomTag();

        highLightTag(randomTag);

        setTimeout(()=>{
            unHighLightTag(randomTag);
        },100)
    },100)

    setTimeout(()=>{
        clearInterval(interval);

        setTimeout(()=>{
            const random = pickRandomTag();

            highLightTag(random);
        },100)
    },times*100)
    
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highLightTag(tag){
    tag.classList.add('highlight');
}

function unHighLightTag(tag){
    tag.classList.remove('highlight');
}