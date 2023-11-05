function selOpc () {
    let input = document.getElementById('input-opc')
    if(!input.value){
        alert('Opção indisponivel')
    }
    else if(input.value<1  || input.value>4){
        alert('Opção indisponivel')
    }
}