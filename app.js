const form = document.getElementById("form-nota");
const inputTexto = document.getElementById("texto");
const selectCat = document.getElementById("cat");
const btnAdd = document.getElementById("add");
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");

let notas = [];
let ultimaNotaEliminada = null;

inputTexto.addEventListener("input", validarInput);
selectCat.addEventListener("change", validarInput);

function validarInput() {
  const textoValido = inputTexto.value.trim().length > 0;
  const catValida = selectCat.value !== "";
  btnAdd.disabled = !(textoValido && catValida);
}

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje " + tipo;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const texto = inputTexto.value.trim();
  const cat = selectCat.value;

  if (!texto || !cat) return;

  notas.push({ id: Date.now(), texto, cat });
  inputTexto.value = "";
  selectCat.value = "";
  btnAdd.disabled = true;

  pintar();
  mostrarMensaje(`¡Nota agregada en ${cat}!`, "exito");
});

function pintar() {
  lista.innerHTML = "";
  if (notas.length === 0) {
    lista.innerHTML = "<p>No hay notas registradas.</p>";
    return;
  }

  notas.forEach((n) => {
    const div = document.createElement("div");
    div.className = "item-nota";
    div.innerHTML = `
      <div>
        <strong>[${n.cat}]</strong> ${n.texto}
      </div>
      <button class="boton-borrar" onclick="borrar(${n.id})">Eliminar</button>
    `;
    lista.appendChild(div);
  });
}

function borrar(id) {
  const index = notas.findIndex((n) => n.id === id);
  if (index !== -1) {
    ultimaNotaEliminada = notas[index];
    notas.splice(index, 1);
    pintar();
    
    mensaje.innerHTML = `Nota eliminada. <button onclick="deshacer()" style="min-height:30px; padding:2px 8px; cursor:pointer;">Deshacer</button>`;
    mensaje.className = "mensaje info";
  }
}

function deshacer() {
  if (ultimaNotaEliminada) {
    notas.push(ultimaNotaEliminada);
    ultimaNotaEliminada = null;
    pintar();
    mostrarMensaje("Nota restaurada con éxito.", "exito");
  }
}

pintar();