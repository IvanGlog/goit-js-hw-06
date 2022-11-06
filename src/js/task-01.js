// Кількість категорій

const catEl = categories.querySelectorAll('li.item');
console.log(`Number of categories: ${catEl.length}`);

// Заголовок та кільіксть елементів
catEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
