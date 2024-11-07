 // Aquí tu código

const botonAgregar = document.getElementById("agregar");
const lista = document.getElementById("lista");

// Función //
botonAgregar.addEventListener("click", function() {
    // prompt //
    const nuevoElemento = prompt("Introduce un nuevo elemento para la lista:");

  //condicionall//  
  if (nuevoElemento) {
    const li = document.createElement("li");
    li.textContent = nuevoElemento.trim(); // el trim elimina espacios al inicio y al final :)
    lista.appendChild(li);
} else {
    alert("Por favor ingresa un elemento válido.");
}
});
