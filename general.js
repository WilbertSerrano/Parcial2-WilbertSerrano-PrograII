const paises=document.querySelectorAll('.elemento');
//console.log(paises);
const tarjeta=document.querySelector('#tarjeta');
//console.log(tarjeta);
const texto=document.querySelector('#texto');
//console.log(texto);

paises.forEach(function cadaPais(pais){
    pais.addEventListener('click', cambiarPais);
})

function cambiarPais(pais){
    texto.innerHTML =+`
    <div id="texto">
    <h2>${pais.target.textContent}</h2>
    <p>${pais.target.descripcion}</p>
</div>`
    console.log(`${pais}`);
}

console.log(`${pais.target}`);
