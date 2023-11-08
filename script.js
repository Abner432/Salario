function selOpc () {
    let input = document.getElementById('input-opc')
    if(!input.value){
        alert('Opção indisponivel')
    }
    else if(input.value<1  || input.value>4){
        alert('Opção indisponivel')
    }
    else if(input.value==1){
        let modal = document.querySelector('.modal1')
        modal.style.display = 'block';
    }
}

function fechar(){
    let modal = document.querySelector('.modal1')
    modal.style.display = 'none';
}

function calcSal() {
    let antSal = parseInt(document.getElementById('inserir-sal').value)
    if(!antSal || antSal<=0){
        alert('digite um salário válido')
    }
    else if(antSal<=1200){
        let nSal = antSal+((antSal*15)/100)
        document.getElementById('mostarSal').innerHTML = "Seu novo salário é: "+nSal
    }
}