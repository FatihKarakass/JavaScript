let email = "Ömerfatihkaraks2002@gmail.com"
let firstName = "ömer"
let lastName = "Karakaş"

console.log(email.length)
console.log(firstName[0])
console.log(firstName.charAt(0))

firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLocaleLowerCase()
console.log(firstName)

console.log(email.search("@")) //olmayan bir şey aratılırsa -1 yazar
console.log(email[19])

let Domain = email.slice(email.search("@") +1)
console.log(Domain)

console.log(
    Domain.slice(0, Domain.indexOf("."))

)
console.log(Domain)

console.log(email)


email = email.replace(Domain,'karakas.com')
console.log(email)


email.includes('asdgag')//false
email.includes('@')//true
//istediğim bigiyle başladımı bittimi startWidth, endxWidth
console.log(
    email.endsWith('karakas.com')
)

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)}`


console.log(fullName)




