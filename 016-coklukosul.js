let userName = prompt("Kullanici adiniz: ")
let age = prompt("Yasiniz:")


if(userName && age>=18){
    console.log("Ehliyet alabilir")
}else if(!userName){
    console.log("Kullanici adiniz yok")
}else if(age==0){
    console.log("geçerli yaş giriniz")
}
else if(!(age>=18)){
    console.log("Ehliyet almak için yasınız yetersiz...")
}


