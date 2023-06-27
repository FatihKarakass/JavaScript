let firstname = "FTİH"

//function greetings() {
//    console.log(`Merhaba ${firstname}`)
//}
//greetings()//sadece merhaba yazar


function greetings(firstname="" , lastName="") {
    console.log(`Merhaba ${firstname}`)
    console.log(`Merhaba ${firstname} ${lastName}`)
}


greetings("Ömer","Karakaş")//burdaki kod kabul görülür

console.log(firstname)
//****************************** */
function greetings2(firstname, lastName){

    let info =`Merhaba ${firstname} ${lastName}`
    return info

}
let greetingsInfo = greetings2("Ad","Soyad")

console.log(greetingsInfo)

/********************************* */
function domIdWriteInfo(id, info){

    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML= info
}
let htmlInfo = `<span style="color:red">Color red</span>`

domIdWriteInfo(`greeting`, htmlInfo )
domIdWriteInfo( 'info' ,  )

