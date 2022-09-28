const rating = document.querySelectorAll('.circle');

let submitButton = document.querySelector('.submit')
let section = document.querySelectorAll('section')
let currentRating = document.querySelector('span')
let ratingValue = "0";

const toggleClick = (e) => {
    rating.forEach(rate=>{
        rate.classList.remove('selected')
    })
    let selectedRating = e.target
    selectedRating.classList.add('selected');
    ratingValue = selectedRating.innerHTML;
    console.log(ratingValue);
    
    return;
}

const toggleSubmit = () => {
    section[0].classList.replace('container','hidden');
    section[1].classList.replace('hidden','container');
    currentRating.innerHTML=ratingValue;
}


rating.forEach( (rating) => {
    rating.addEventListener('click', toggleClick)
});

submitButton.addEventListener('click', toggleSubmit)