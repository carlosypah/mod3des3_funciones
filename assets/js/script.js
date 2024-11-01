//2 funciones arrow 1 que retorne y otra que no

// suma = (a1,a2) => a1+a2
// function suma2(a1, a2){
//   return a1+a2;
// }
// console.log(suma2(9,9))
//console.log(suma(3,3))

obtenerColorDeFondo = () => {
  console.log('obt color de fondo');
  return document.querySelector("body").style.backgroundColor;
};

obtenerColorDeSelector = () => {
  colorSeleccionado = document.getElementById("colores").value;
  console.log(colorSeleccionado);
  return colorSeleccionado;
};

fijarColor = () => {
  color = obtenerColorDeSelector();
  console.log(color);
  document.querySelector("body").style.backgroundColor = color;
};

// function fijarColor2(color){
//   document.querySelector("body").style.backgroundColor = color
// };

btnCambio = document.getElementById("color");
btnCambio.addEventListener("click", fijarColor)

btnAlerta = document.getElementById("alerta");
btnAlerta.addEventListener("click", () => alert(obtenerColorDeFondo()));

// function alertar() {
//     alert("hola");
//   }
//   btn = document.querySelector("button");
//   btn.addEventListener("click", alertar);
  /* script.js */
// function pintar(color) {
//   elemento = document.querySelector("body");
//   elemento.style.backgroundColor = color;
//   }
//   btn = document.querySelector("button");
//   btn.addEventListener("click", pintar);

// suma = (a,b) => a + b

// btn = document.querySelector("button")
// btn.addEventListener("click",() => alert('hola'))

// document.addEventListener('keydown',function(event){
//   if (event.key === "a" || event.key === "A"){
//     agregarElemento();
//   }else if (event.key === "d" || event.key ==="D"){
//     eliminarElemento();
//   }
// });

// function agregarElemento(){
//   cont = document.getElementById("contenedor");
//   elemento = document.createElement("div");
//   elemento.textContext = "Elemento Agregado";
//   elemento.innerText ="hola";
//   cont.appendChild(elemento);
// }

// function eliminarElemento(){
//   cont = document.getElementById("contenedor");
//   elementos = cont.querySelectorAll("div")
//   if(elementos.length > 0){
//     cont.removeChild(elementos[elementos.length - 1])
//   }
// }