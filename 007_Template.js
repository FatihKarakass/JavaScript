let username = "Ömer_Fatih"
const DOMAIN ="karakas.com"

let email = username + "@" + DOMAIN

//console.log("Merhaba" ,username, " Sitemize hoşgeldin" , "Mail adresin : ", email )
let info = `
Merhaba ${username} sitemize hosgeldin .. 
mail adreesin ${email}
mail asresiniz uzunluğu: ${email.length}.
borcunuz: ${(10+3)*8}.
gunun saat bilgisi : ${new Date().getHours()}.
kısa isminiz : ${username[0]}.
`
console.log(info)

