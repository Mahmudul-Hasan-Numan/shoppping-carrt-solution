// function updateProductNumber(product, price, isAdding) {
//     const caseInput = document.getElementById(product + '-number');
//     let caseNumber = caseInput.value;

//     if (isAdding == true) {

//         caseNumber = parseInt(caseNumber) + 1;
//     }
//     else if (caseNumber > 0) {
//         caseNumber = parseInt(caseNumber) - 1;
//     }

//     // update case total
//     const caseTotal = document.getElementById(product + '-total');
//     caseTotal.innerText = caseNumber * price;

//     caseInput.value = caseNumber;
//     calculateTotal()
// }

// //Handle the phone events
// document.getElementById('phone-plus').addEventListener('click', function () {
//     updateProductNumber('phone', 1219, true)
// })

// document.getElementById('phone-minus').addEventListener('click', function () {
//     updateProductNumber('phone', 1219, false)
// })



// //Handle the case events
// document.getElementById('case-plus').addEventListener('click', function () {

//     updateProductNumber('case', 59, true)
// })

// document.getElementById('case-minus').addEventListener('click', function () {

//     updateProductNumber('case', 59, false)
// })

// function getInputTotal(product) {
//     const phoneInput = document.getElementById(product + '-number');
//     const phoneNumber = parseFloat(phoneInput.value);
//     return phoneNumber;
// }

// function calculateTotal() {

//     const phoneTotal = getInputTotal('phone') * 1219;
//     const caseTotal = getInputTotal('case') * 59;
//     const subTotal = phoneTotal + caseTotal;
//     const tax = subTotal / 10;
//     const total = subTotal + tax;

//     document.getElementById('sub-total').innerText = subTotal;
//     document.getElementById('tax-amount').innerText = tax;
//     document.getElementById('total-price').innerText = total;


// }





// Practice session

function updateProductNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;

    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }

    caseInput.value = caseNumber
    // //update the total price
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = (caseNumber) * price;
    calculateTotal();
}

//Handle the phone events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})



//handle the case events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true)
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false)
})

function getInputValue(product) {
    const phoneInput = document.getElementById(product + '-number').value;
    return phoneInput;
}

//calculate total
function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10;
    const total = subtotal + tax;

    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total

}