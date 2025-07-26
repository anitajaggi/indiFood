const decrementBtn = document.querySelectorAll('#decrement');
const incrementBtn = document.querySelectorAll('#increment');
const quantityEl = document.querySelectorAll('#quantity');

decrementBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let qty = parseInt(quantityEl[index].innerText);
        if (qty > 1) qty--;
        quantityEl[index].innerText = qty;
    })
})

incrementBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let qty = parseInt(quantityEl[index].innerText);
        qty++;
        quantityEl[index].innerText = qty;
    })
})