// task1
let object = {
    name:"Aimarket",
    phoneNumber:"870736110230",

 products:[{
    productname:"A|X",
    cotegory:"Киім",
    prise:12999,
    stock:5,
},
{
    productname:"iphone",
    cotegory:"Электроника",
    prise:279500,
    stock:10,
},
{
    productname:"Стиральная машинка",
    cotegory:"Бытовая техника",
    prise:150990,
    stock:3,
},
{
    productname:"Дайсон",
    cotegory:"Бытовая техника",
    prise:256432,
    stock:2,
},
{
    productname:"Lenovo",
    cotegory:"Электроника",
    prise:250990,
    stock:7,
}]
}

// task2
// let changeShopName = prompt("Дүкен атын жаз")
// object.name = changeShopName

// task3
// function changeNumber(){
//     let changePhoneNumber = +prompt("Жана телефон номерін еңгіз")
//     if(changePhoneNumber==""){

//     }else{

//     }
// }

// task4
// function listProductNames(){
//     alert(object.products.productname)
// }


// task5
// function addProduct(){
//     let productname = prompt("Өнімнің атауын жаз")
//     let cotegory = prompt("Котегориясын эңгіз")
//     let prise = +prompt("Бағасын еңгіз")
//     addProduct=object+productname
//     addProduct=object+cotegory
//     addProduct=object+prise
// }
// console.log(object);

// task6
function applyDiscountToCategory(){
    let tanday = prompt("Категория таңдаңыз: киім/Бытовая техника/Электроника")
    if(tanday=="киім"){
        let skidka = +prompt("Қанша пайыз жеңілдік жасау")
        baga = products.prise/skidka
    }else if(tanday=="Бытовая техника"){
        let skidka = +prompt("Қанша пайыз жеңілдік жасау")
        baga = products.prise/skidka
    }else if(tanday=="Электроника"){
        let skidka = +prompt("Қанша пайыз жеңілдік жасау")
        baga = products.prise/skidka
    }
}
