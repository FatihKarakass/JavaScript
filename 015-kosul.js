let username = prompt("Kullanıcı adınızı giriniz")

if (username.length >10){
    console.log(`Kullanıcı Adiniz: ${username}`)
}
else{
    console.log(` Kullanici adi 10 harfen uzun olmali ${username} olamaz.` )
}