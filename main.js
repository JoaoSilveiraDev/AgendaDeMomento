
document.getElementById("botao").addEventListener("click", ()=>{
    
    localStorage.setItem(0, document.getElementById("texto").value)
    localStorage.setItem(1, document.getElementById("data").value)
    var container = document.getElementById("container")
    var texto = document.createElement("p")
    texto.appendChild(document.createTextNode(localStorage.getItem(0)))
    container.appendChild(texto)
    
    var container = document.getElementById("container")
    var texto = document.createElement("p")
    texto.appendChild(document.createTextNode(localStorage.getItem(1)))
    container.appendChild(texto)

})
addEventListener("load", ()=>{
    var container = document.getElementById("container")
    var texto = document.createElement("p")
    texto.appendChild(document.createTextNode(localStorage.getItem(0)))
    container.appendChild(texto)
    
    var container = document.getElementById("container")
    var texto = document.createElement("p")
    texto.appendChild(document.createTextNode(localStorage.getItem(1)))
    container.appendChild(texto)

})