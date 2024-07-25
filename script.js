const botones = document.querySelectorAll('.boton')
const clear = document.querySelector('.clear')
const igual = document.querySelector('.igual')
const resultado = document.querySelector('.resultado')
var resultadotemp = '';

botones.forEach(function(boton){
    boton.addEventListener('click', function(){
        resultadotemp += this.textContent;
        
        resultado.textContent = resultadotemp;
    });
});


igual.addEventListener('click', function(){
    try {
        resultadotemp = eval(resultado.textContent);
        resultado.textContent =resultadotemp;

     } catch (error) {
            resultadotemp = "error";
            resultado.textContent =resultadotemp;   
        }
    
})



clear.addEventListener('click', function(){
    resultadotemp = '';
    resultado.textContent = '0';
})

