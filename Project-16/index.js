const smallCups = document.querySelectorAll('.cup-small');
const litters = document.getElementById('litter');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup,index) => {
    cup.addEventListener('click',()=> highLightCups(index))
})

function highLightCups(index){

    if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')){
        index--;
    }

    smallCups.forEach((cup,index2)=>{
        if(index2 <= index ){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup();
}


function updateBigCup(){
    const fullCup = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if(fullCup === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    }else{
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCup/totalCups * 330}px`;

        percentage.innerText = `${fullCup / totalCups * 100}%`
    }

    if(fullCup === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }else {
        remained.style.visibility = 'visible';
        litters.innerText = `${2 - (250 * fullCup / 1000)}L`
    }
}