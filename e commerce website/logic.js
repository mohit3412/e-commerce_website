function calculateTotal() {
    let total = 0;
    document.querySelectorAll('#cart-items li').forEach(item => {
        total += parseFloat(item.getAttribute('data-price'));
    });
    document.getElementById('total').textContent = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', calculateTotal);

document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const address = document.getElementById('address');
    const card = document.getElementById('card');

    // Name validation
    if (name.value.trim() === "") {
        document.getElementById('name-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        document.getElementById('email-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    // Address validation
    if (address.value.trim() === "") {
        document.getElementById('address-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('address-error').style.display = 'none';
    }

    // Card validation (allows only numbers and spaces)
    const cardNumber = card.value.replace(/\s/g, '');
    if (!/^\d{16}$/.test(cardNumber)) {
        document.getElementById('card-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('card-error').style.display = 'none';
    }

    if (valid) {
        alert('Order placed successfully!');
    }
});

// Auto-format card number input
document.getElementById('card').addEventListener('input', function (event) {
    let value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    let formattedValue = value.replace(/(\d{4})/g, '$1 ').trim(); // Add spaces every 4 digits
    event.target.value = formattedValue;
});

const total_price = document.querySelector('#total');
const item = document.querySelectorAll('.item');
let total = 0;

item.forEach(price => {
    price.onchange = () =>{
        if(price.checked === true){
            total = total + Number(price.value);

        }
        if(price.checked ===false){
            total = total-Number(price.value);
            total_price.innerHTML = 0;
        }
        if(total !== 0){
            total_price.innerHTML = total;
        }
    }
})