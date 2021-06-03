function verificar() {
    var inicio = window.document.querySelector("input#txtinicio");
    var fim = window.document.querySelector("input#txtfim");
    var passo = window.document.querySelector("input#txtpasso");
    var res = window.document.querySelector("div#res");
    
    if(inicio.value.length == 0 || fim.value.length == 0 || fim.value.length == 0) {
        window.alert("Preencha todos os campos.");
        res.innerHTML += "Impossível contar!";
    } else {
        if (Number(passo.value) == 0) {
            window.alert("Passo inválido. Considerando passo 1.");
            passo = 1;
        } 
        if (Number(inicio.value) < Number(fim.value)) {
            res.innerHTML = "Contando: <br>";
            for(var i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
                res.innerHTML += `${i} \u{1F449}`;
            }
            res.innerHTML += `\u{1F3C1}`;
        } else if (Number(inicio.value) > Number(fim.value)) {
            res.innerHTML = "Diminuindo: <br>";
            for(var i = Number(inicio.value); i >= Number(fim.value); i -= Number(passo.value)) {
                res.innerHTML += `${i} \u{1F449}`;
            }
            res.innerHTML += `\u{1F3C1}`;
        } else {
            window.alert("Não é possível fazer operação com início = fim. Tente novamente!");
        }
    }
}
