document.getElementById('mas').addEventListener('click', function() {
    const newDiv = document.createElement('div');
    newDiv.className = 'contenedor2';
    newDiv.innerHTML = `
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre">
        <label for="apellido">Apellido</label>
        <input type="text" name="apellido">
    `;
    const form = document.getElementById('formulario');
    form.insertBefore(newDiv, form.lastElementChild.previousElementSibling);
});

document.getElementById('menos').addEventListener('click', function() {
    const form = document.getElementById('formulario');
    const lastDiv = form.querySelectorAll('.contenedor2');
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
