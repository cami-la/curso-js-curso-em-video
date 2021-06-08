let num = window.document.querySelector("input#txtn");
let tab = window.document.querySelector("select#seltab"); 

function tabuada() {
    if(num.value.length == 0) {
        window.alert("Digite um número!");
    } else {
        let n = Number(num.value);
        var count = 1;
        //tab.innerHTML = "";
        while(count <=10) {
            let item = document.createElement("option");
            item.text = `${n} x ${count} = ${n*count}`;
            item.value = `tab${count}`; 
            tab.appendChild(item);
            count++;
        }
    }
}

function limpar() {
    tab.innerHTML = "";
}