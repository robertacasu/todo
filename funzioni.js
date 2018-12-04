function crea(el) {
    return document.createElement(el);
}

function salva(valore) {
    var arrayid = [];
    cose.forEach(el =>{
        arrayid.push(el.id);
    });

    if (arrayid.length){
        var max = Math.max(...arrayid)+1
    } else {
        max=1
    }
    var nuovo = {
        id: max,
        titolo: valore,
        fatto:false
    }

    cose.push(nuovo);
    localStorage.cose = JSON.stringify(cose)
    disegna(cose);
}

function aggiorna(id) {
    var elemento = cose.find((cose) => cose.id == id )
    elemento.fatto = !elemento.fatto;
    localStorage.cose = JSON.stringify(cose)
    disegna (cose)
}
