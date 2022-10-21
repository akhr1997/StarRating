let star = document.querySelectorAll('.star');
let rate_num = document.querySelector('#rate-num');

function stars(e) {

    for (let i = 0; i < star.length; i++) {
        star[i].classList.remove('active');
    }
    
    for (let j = 0; j <= e; j++) {
        star[j].classList.add('active');
        myval = j + 1;
    }
}