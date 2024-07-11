//Llamado al botón 'mas' por medio del ID y creación de evento para que se duplique el formulario
document.getElementById('mas').addEventListener('click', function() {
    //Declaración de la constante newDiv que es igual a la creación de un div como elemento nuevo
    const newDiv = document.createElement('div');
    //Asignación de la clase contenedor2 al nuevo div para que tengas las mismas propiedades css
    newDiv.className = 'contenedor2';
    //Establece qué irá dentro del nuevo elemento tipo div que se creará
    newDiv.innerHTML = `
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre">
        <label for="apellido">Apellido</label>
        <input type="text" name="apellido">
    `;
    const form = document.getElementById('formulario');
    //Ubicación del nuelvo elemento
    form.insertBefore(newDiv, form.lastElementChild.previousElementSibling);
});

//Llamado al botón menos y creación de evento click
document.getElementById('menos').addEventListener('click', function() {
    //Llamado del formulario y del último evento que se agreagó, todo dentro de una función
    const form = document.getElementById('formulario');
    const lastDiv = form.querySelectorAll('.contenedor2');
    //Función if que elimina el último div asignado
    if (lastDiv.length > 1) {
        form.removeChild(lastDiv[lastDiv.length - 1]);
    }
});

const formulario = document.querySelector("form");
const mensaje = document.querySelector("p");

formulario.addEventListener("submit", (e) => {
    const inputs = formulario.querySelectorAll('input[type="text"]');
    let isValid = true;
    let firstEmptyInput = null;

    inputs.forEach(input => {
        if (input.value === "") {
            isValid = false;
            if (!firstEmptyInput) {
                firstEmptyInput = input;
            }
        }
    });

    if (!isValid) {
        e.preventDefault();
        mensaje.textContent = "Información requerida";
        if (firstEmptyInput) {
            firstEmptyInput.focus();
        }
        // Foco en todos los inputs vacíos
        inputs.forEach(input => {
            if (input.value === "") {
                input.focus();
            }
        });
    } else {
        alert("Información recibida");
    }
});
