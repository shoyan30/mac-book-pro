
// Memory Part


function getMemory(memoryCost) {
    if (memoryCost) {
        const memoryButton = document.getElementById('memory-cost');
        memoryButton.innerText = 0;


    } else {
        const memoryButton = document.getElementById('memory-cost');
        memoryButton.innerText = 180;

    }

    calculation()

}


//storage part

function getstorage(storageCost) {
    if (storageCost == true) {
        const storageButton = document.getElementById('storage-cost');
        storageButton.innerText = 0;
    } else if (storageCost == false) {
        const storageButton = document.getElementById('storage-cost');
        storageButton.innerText = 100;
    } else {
        const storageButton = document.getElementById('storage-cost');
        storageButton.innerText = 180;
    }

    calculation();

}

//delivery part


function getdelivery(deliveryCost) {
    if (deliveryCost == true) {
        const deliveryButton = document.getElementById('delivery-cost');
        deliveryButton.innerText = 0;
    } else {
        const deliveryButton = document.getElementById('delivery-cost');
        deliveryButton.innerText = 20;
    }
    calculation();
}


//calculation part

function calculation() {
    const memoryButton = document.getElementById('memory-cost');
    const totalMemoryCost = memoryButton.innerText;
    const totalMemoryCostAmount = parseInt(totalMemoryCost);

    const storageButton = document.getElementById('storage-cost');
    const totalstoragecost = storageButton.innerText;
    const totalStorageCostAmount = parseInt(totalstoragecost);

    const deliveryButton = document.getElementById('delivery-cost');
    const totalDeliveryCost = deliveryButton.innerText;
    const totalDeliveryCostAmount = parseInt(totalDeliveryCost);

    const totalPrice = totalMemoryCostAmount + totalStorageCostAmount + totalDeliveryCostAmount + 1299;

    const totalCost = document.getElementById('total-price');
    totalCost.innerText = totalPrice;

    const total = document.getElementById('total-amount');
    total.innerText = totalPrice;

}


//memory buttons

document.getElementById('memory-btn1').addEventListener('click', function () {

    getMemory(true);

})
document.getElementById('memory-btn2').addEventListener('click', function () {

    getMemory(false);
})

//storage buttons

document.getElementById('storage-btn1').addEventListener('click', function () {


    getstorage(true)

})
document.getElementById('storage-btn2').addEventListener('click', function () {
    getstorage(false)

})
document.getElementById('storage-btn3').addEventListener('click', function () {

    getstorage();
})

//delivery buttons
document.getElementById('delivery-btn1').addEventListener('click', function () {
    getdelivery(true);
})
document.getElementById('delivery-btn2').addEventListener('click', function () {

    getdelivery();


})

//pomo code part


let promoStatus = true;

 document.getElementById('apply-button').addEventListener('click', function(){
     const pomoCode = document.getElementById('pomo-area');
     const code = pomoCode.value;

     if(code == 'stevekaku' && promoStatus){


         const total = document.getElementById('total-amount');
        const finallyTotal = total.innerText;
        const discount = finallyTotal - (20 * finallyTotal / 100);

        total.innerText = discount;

        pomoCode.value = "";

        promoStatus = false;


    }
})

// End Of JS file









