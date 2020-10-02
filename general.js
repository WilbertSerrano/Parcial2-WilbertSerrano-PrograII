//Variables
const paises=document.querySelectorAll('.elemento');
const tarjeta=document.querySelector('#tarjeta');
const texto=document.querySelector('#texto');
//Evento
paises.forEach(function cadaPais(pais){
    pais.addEventListener('click', cambiarPais);   
})
//Función
function cambiarPais(pais){
    const titulo=pais.target.textContent;
    const descripcion=pais.target.getAttribute('descripcion');
    const imagen=pais.target.getAttribute('imagen');

    tarjeta.setAttribute('style', `background: linear-gradient(to right, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0)), url('${imagen}');`);

    texto.innerHTML =`
    <div id="texto">
    <h2>${titulo}</h2>
    <p>${descripcion}</p>
</div>`

    paises.forEach(function(botones){
        botones.classList.remove('activo');
    })
    pais.target.classList.add('activo');
}