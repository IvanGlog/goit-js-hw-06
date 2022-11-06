const refs = {
    inputEl: document.querySelector("#name-input"),
    spanEL: document.querySelector("#name-output"),
}
console.log(refs.inputEl);
console.log(refs.spanEL);

refs.inputEl.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() !== '') {
        refs.spanEL.textContent = event.currentTarget.value;  
    } else {
        refs.spanEL.textContent = 'Anonymous';
    }
});