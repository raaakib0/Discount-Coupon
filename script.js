document.getElementById('cuponButton').addEventListener('click', function () {
    const inputField = document.getElementById('inputValue');
    const inputFieldValue = inputField.value;
    if (inputFieldValue == "DOM") {

        // innertext collection from h1
        const amountValue = document.getElementById('amount').innerText;
        const amountValueNumber = parseFloat(amountValue);
        //    discount calculation
        const discountAmount = (amountValueNumber * 30) / 100;
        const discountValue = amountValueNumber - discountAmount;
        // disccount amount sent to html
        const discountValueField = document.getElementById('discount');
        discountValueField.innerText = " - " + discountAmount;
        // discount value sent to heml
        const discountValueShow = document.getElementById('discountAmount');
        discountValueShow.innerText = 'Discount Amount - ' + discountValue;
        inputField.value = '';

    }
})
