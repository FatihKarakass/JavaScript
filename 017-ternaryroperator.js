let userName = prompt("Kulanici adinizi giriniz:")
let info = document.querySelector("#info")

info.innerHTML =`${userName.length > 0 ? userName : "Kullanici bilginiz Bulunmadi."}`








