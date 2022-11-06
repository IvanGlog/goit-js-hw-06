const refs = {
    countDecrement: document.querySelector('[data-action="decrement"]'),
    countIncrement: document.querySelector('[data-action="increment"]'),
    countValue: document.querySelector('#value'),
};

let value = 0;

const increment = () => {
    value += 1;
    
    refs.countValue.textContent = value;
};

const decrement = () => {
    value -= 1;
    
    refs.countValue.textContent = value;
};

refs.countDecrement.addEventListener('click', decrement);
refs.countIncrement.addEventListener('click', increment);