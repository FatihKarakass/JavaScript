let price = 111
let  stringPrice="111"
let hasPassword = true

console.log(
    "price",
    typeof(price)
)

console.log(
    "stringPrice"
    ,typeof(stringPrice)
)

console.log(
    "hasPassword",
    typeof(hasPassword)
)

// parseInt, Number , parseFloat , 


let number1 ="11"
number1 =parseInt(number1) // sayıya çevirir
console.log("number1 :" , number1  , typeof(number1))

let number2 = "16px"
number2 = parseInt(number2)
console.log("Number2 :" , number2  , typeof(number2))

let number3 = "16"
number3 = Number(number3) // number tanımlandığında tamamen sayı olması gerekiyor.
console.log("number3 : " , number3 , typeof(number3))

let number4 = "16.1px" 
number4 = parseFloat(number4)  // ölçü birimkerini de kabul ediyor *.1 gibi sayılarıda kabul ediyor
console.log("number4" , number4 , typeof(number4))

 
// number veri tipinden stringe çevirme -- .tuString()
 let number5 = 10
 number5 = number5.toString()
 console.log(number5 , typeof(number5))
 


