function verificar() {
    var fAno = window.document.getElementById("textAno");
    var masc = window.document.getElementById("mas");
    var fem = window.document.getElementById("fem");
    var img = window.document.querySelector("img#imagem");
    var res = window.document.querySelector("div#res")
    
    var data = new Date();
    var anoAtual = data.getFullYear();
    if (fAno.value.length == 0 || Number(fAno.value) > anoAtual) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        var fsex = document.getElementsByName("radioSex");
        var idadeAtual = anoAtual - Number(fAno.value);
        var genero = "";
        
        genero = fsex[0].checked ? "homem" : "mulher";
        /*if (fsex[0].checked) {
            genero = "masculino";
        } else {
            genero = "feminino";
        }*/
        
        var img = document.createElement("img");
        img.setAttribute("id", foto);

        if (genero.valueOf("feminino")) {
            if (idadeAtual >= 0 && idadeAtual < 10) {
                //criança
                img.setAttribute("src", "foto-bebe-masc.png");
            } else if (idadeAtual < 21) {
                //jovem
                img.setAttribute("src", "foto-jovem-masc.png");
            } else if (idadeAtual < 50) {
                //adulto
                img.setAttribute("src", "foto-adulto-masc.png");
            } else {
                //idoso
                img.setAttribute("src", "foto-idoso-masc.png");
            }
        } else {
            if (idadeAtual >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "foto-bebe-fem.png");
            } else if (idadeAtual < 21) {
                //jovem
                img.setAttribute("src", "foto-jovem-fem.png");
            } else if (idadeAtual < 50) {
                //adulto
                img.setAttribute("src", "foto-adulto-masc.png");
            } else {
                //idoso
                img.setAttribute("src", "foto-idoso-masc.png");
            }
        }

        res.style.textAlign = "center";
        res.innerHTML = `Detectamos o sexo ${genero} com idade ${idadeAtual} anos`;
        res.appendChild(img);
    }
 


    
    

}