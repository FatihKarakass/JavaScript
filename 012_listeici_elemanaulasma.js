let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son öğeyi değiştir"

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk oge değidtir..."

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li")

liDOM.innerHTML = "Kendi oluşturduğumuz oge..."

//ulDOM.append(liDOM) EN SONA GİDİYOR
ulDOM.prepend(liDOM)


