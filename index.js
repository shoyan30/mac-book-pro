function getmemorycost(costofmemory,cost){
    if(costofmemory == true){
        const memoryCost = document.getElementById(cost);
        memoryCost.innerText = 180;
          
        
    }else if(costofmemory == false){
        const memoryCost2 = document.getElementById(cost);     
        memoryCost2.innerText = 100;
    }else{
        const memoryCost3 = document.getElementById(cost);
        memoryCost3.innerText = 0;
         
    }
}

// function getstoragecost(coststorage){
//     if(coststorage == true){
//         const storageCost = document.getElementById('storage-cost');
//         // storageCost.innerText = 180;
//     }else if(coststorage == false){
//         const storageCost = document.getElementById('storage-cost');
//         // storageCost.innerText = 100;
//     }else{
//         const storageCost = document.getElementById('storage-cost');
//         // storageCost.innerText = 0;
//     }
    
// }

//memory part
 
 document.getElementById('memory-btn2').addEventListener('click' ,function(){
    
    getmemorycost(true,'memory-cost');
})
 document.getElementById('memory-btn1').addEventListener('click' ,function(){
    getmemorycost();
})

//storage part

document.getElementById('storage-btn3').addEventListener('click', function(){
    getmemorycost(true, 'storage-cost');
})
document.getElementById('storage-btn2').addEventListener('click', function(){
    
    getmemorycost(false,'storage-cost');
})
document.getElementById('storage-btn1').addEventListener('click', function(){
    getmemorycost();
})

//delivery charge part

 document.getElementById('delivery-btn1').addEventListener('click', function(){
     const deliveryButton = document.getElementById('delivery-cost');
     deliveryButton.innerText = 0;
 })
document.getElementById('delivery-btn2').addEventListener('click', function(){
     const deliveryButton = document.getElementById('delivery-cost');
     deliveryButton.innerText = 20;

    
})


