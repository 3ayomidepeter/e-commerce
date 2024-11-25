
const decrement = document.getElementById('decrement')
const increment = document.getElementById('increment')
const display = document.getElementById('display')
const cartBtn = document.getElementById('cart-btn')

let quantity = 0

decrement.addEventListener('click', function () {
    quantity--;
    display.innerText = quantity
    if (quantity <= 0) {
        decrement.disabled = true
        cartBtn.disabled = true
    }
})

increment.addEventListener('click', function () {
    quantity++;

    decrement.disabled = false
    cartBtn.disabled = false
    display.innerText = quantity;

});

cartBtn.addEventListener('click', function () {
    quantity = 0
    display.innerHTML = quantity
})