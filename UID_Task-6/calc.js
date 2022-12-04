const calculate = document.querySelector('.calculate');

calculate.addEventListener('click', (e)=> {
    e.preventDefault();

    const billAmt = document.getElementById('amount').value;
    const percentage = document.getElementById('discount-percentage').value;
    const discountAmt = document.getElementById('discount-amount');
    const FinalPay = document.getElementById('pay');


    discountAmt.value =  9.807*percentage;
    FinalPay.value = billAmt * percentage;
});

