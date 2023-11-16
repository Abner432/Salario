function selOpc () {
    let input = document.getElementById('input-opc')
    if(!input.value){
        alert('Opção indisponivel')
    }
    else if(input.value<1  || input.value>4){
        alert('Opção indisponivel')
    }
    else if(input.value==1){
        let modal1 = document.querySelector('.modal1')
        modal1.style.display = 'block';
    }
    else if(input.value==2){
        let modal2 = document.querySelector('.modal2')
        modal2.style.display = 'block';
    }
    else if(input.value==3){
        let modal3 = document.querySelector('.modal3')
        modal3.style.display = 'block';
    }
}

function fechar(){
    if(document.getElementById('input-opc').value == 1){
        let modal1 = document.querySelector('.modal1')
        modal1.style.display = 'none';  
    }
    if(document.getElementById('input-opc').value == 2){
        let modal2 = document.querySelector('.modal2')
        modal2.style.display = 'none';  
    }
    if(document.getElementById('input-opc').value == 3){
        let modal3 = document.querySelector('.modal3')
        modal3.style.display = 'none';  
    }
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
    else if(antSal>1200 && antSal<=2400){
        let nSal = antSal+((antSal*10)/100)
        document.getElementById('mostarSal').innerHTML = "Seu novo salário é: "+nSal
    }
    else if(antSal>1200){
        let nSal = antSal+((antSal*5)/100)
        document.getElementById('mostarSal').innerHTML = "Seu novo salário é: "+nSal
    }
}

function calcFerias() {
    let salario = parseInt(document.getElementById('inserir-ferias').value)
    if(!salario || salario<=0){
        alert('digite um salário válido')
    }
    else {
        let ferias = salario+(salario/3)
        document.getElementById('mostarFerias').innerHTML = "O valor das suas férias é: "+ferias
    }
}

function calcDecimo() {
    let decimo = parseInt(document.getElementById('inserir-decimo').value)
    let meses = parseInt(document.getElementById('inserir-meses').value)
    if(!decimo || decimo<=0 || meses<1 || meses>12){
        alert('digite um salário válido')
    }
    else {
        let decimoterc = (decimo*meses)/12
        document.getElementById('mostarDecimo').innerHTML = "O valor do seu decimo terceiro é: "+decimoterc
    }
}