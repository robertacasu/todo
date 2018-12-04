const tbody = document.getElementById("tbody");
const bottone = document.getElementById("devofarcela")
const bottoneelimina = document.getElementById("cancella")
const tenda = document.getElementById("tendina")


if(!localStorage.cose){
    localStorage.cose = JSON.stringify(cose)
}


var cose = JSON.parse(localStorage.cose) || cose;





bottoneelimina.onclick = function () {
    cose.forEach((el, i) => {
        if (el.fatto) {
            cose.splice(i, 1)
        }
    })
    localStorage.cose = JSON.stringify(cose)
    disegna(cose);
}

tenda.onchange = function () {
    console.log(this.value)
}

function disegna(cose) {
    tbody.innerHTML = "";
    cose.forEach(cosa => {
        var tr = crea("tr");
        var td1 = crea("td");
        var td2 = crea("td");
        var td3 = crea("td");
        var td4 = crea("td")
        var checkbox = crea("input");
        var button = crea("button");
        var i = crea("i");
        td2.textContent = cosa.titolo

        checkbox.setAttribute("type", "checkbox");
        if (cosa.fatto) {
            checkbox.setAttribute("checked", "checked")
        }

        checkbox.setAttribute("id-check", cosa.id)
        checkbox.addEventListener("click", function (event) {
            var id = this.getAttribute("id-check");
            localStorage.cose = JSON.stringify(cose)
            aggiorna(id)
        })

        button.setAttribute("class", "btn btn-default")
        button.setAttribute("id-cosa", cosa.id)
        button.addEventListener("click", function (event) {
            var id = this.getAttribute("id-cosa");
            localStorage.cose = JSON.stringify(cose)
            cancella(id)
        })



        i.setAttribute("class", "far fa-trash-alt");

        tbody.appendChild(tr)
        button.appendChild(i)
        td4.appendChild(button)
        td3.appendChild(checkbox)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)


    })
}
localStorage.cose = JSON.stringify(cose)
disegna(cose);

bottone.onclick = function () {
    var input = document.getElementById("testo");
    if (input.value != "") {
    var valore = input.value;
    salva(valore)}
}


var input = document.getElementById("testo");
input.onkeypress = function (event) {
    if (event.keyCode ===13 && input.value){
    var valore = input.value;
    salva(valore)}
}

function cancella(id) {
    var indice = cose.findIndex(cosa => cosa.id == id);
    cose.splice(indice, 1);
    localStorage.cose = JSON.stringify(cose)
    disegna(cose)
}

tenda.onchange = function () {
    switch (this.value) {
        case "tutti":
            disegna(cose)
            break;
        case "fatti":
            var fatti = cose.filter(function (cosa) {
                return cosa.fatto == true
            })
            disegna(fatti);
            break;
        case "dafare":
            var dafare = cose.filter(function (cosa) {
                return cosa.fatto == false
            })
            disegna(dafare)

    }
}