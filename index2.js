let totalFinalPrice = 0;

function getMemory(memoryCost){
    if(memoryCost){
        let memoryButton = document.getElementById('memory-cost');
        memoryButton.innerText = 0;
    }else{
        let memoryButton = document.getElementById('memory-cost');
        memoryButton.innerText = 180;
    }

totalFinalPrice = totalFinalPrice + parseInt(document.getElementById('memory-cost').value);

const totalPrice = document.getElementById('total-price');
totalPrice.innerText = totalFinalPrice; 





//     const memoryButton = document.getElementById('memory-cost');  
//    let totalPrice = document.getElementById('total-price');
//    const totalAmount =parseInt(totalPrice) + parseInt(memoryButton);
//    totalPrice.innerText = totalAmount;

   
    
}

function getstorage(storageCost){
    if(storageCost == true){
        const storageButton = document.getElementById('storage-cost');
         storageButton.innerText = 0;
    }else if(storageCost == false){
        const storageButton = document.getElementById('storage-cost');
        storageButton.innerText = 100;
    }else{
        const storageButton = document.getElementById('storage-cost');
        storageButton.innerText = 180;
    }
    totalFinalPrice = totalFinalPrice + parseInt(storageButton);
}


function getdelivery(deliveryCost){
    if(deliveryCost == true){
        const deliveryButton = document.getElementById('delivery-cost');
    deliveryButton.innerText = 0;
    }else{
        const deliveryButton = document.getElementById('delivery-cost');
    deliveryButton.innerText = 20;
    }
    totalFinalPrice = totalFinalPrice + parseInt(deliveryButton);
}

// function totalCost(){
//     let memoryButton = document.getElementById('memory-cost').innerText;
//     let storageButton = document.getElementById('storage-cost').innerText;
//     let deliveryButton = document.getElementById('delivery-cost').innerText;
    
   
//   const  totalPrice = parseInt(memoryButton) + parseInt(storageButton) + parseInt(deliveryButton) + 1299;

//    document.getElementById('total-price').innerText=totalPrice;

       
// }

document.getElementById('total-price').innerText=totalFinalPrice;




document.getElementById('memory-btn1').addEventListener('click', function(){

getMemory(true);
})
document.getElementById('memory-btn2').addEventListener('click', function(){

getMemory(false);
})


document.getElementById('storage-btn1').addEventListener('click', function(){
    

    getstorage(true)

})
document.getElementById('storage-btn2').addEventListener('click', function(){
    getstorage(false)

})
document.getElementById('storage-btn3').addEventListener('click', function(){

    getstorage();
})


document.getElementById('delivery-btn1').addEventListener('click', function(){
   getdelivery(true);
})
document.getElementById('delivery-btn2').addEventListener('click', function(){
    
    getdelivery();

   
})




 




