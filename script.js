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

function novoSal(){
    let novoSal = document.getElementById('input-sal')
    if(!novoSal.value){
        alert('Digite um valor válido')
    }
}