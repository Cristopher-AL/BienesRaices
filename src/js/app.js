document.addEventListener('DOMContentLoaded', function () {

    eventListeners();

    darkMode();
});

function darkMode() {
    //Para verificar que tema esta usando el usuario
    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

    // console.log(prefiereDarkMode.matches);
    //Si es verdad se agrefa el tema oscuro de lo contrario no
    if(prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode');
    }else {
        document.body.classList.remove('dark-mode');
    }
    //Para verificar si el usuario hace cambios en su tema
    prefiereDarkMode.addEventListener('change', function() {
        if(prefiereDarkMode.matches) {
            document.body.classList.add('dark-mode');
        }else {
            document.body.classList.remove('dark-mode');
        }
    });

    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
}

function eventListeners() {
    const mobilMenu = document.querySelector('.mobile-menu');

    mobilMenu.addEventListener('click', navegacionResposive);

    //Muestra campos condicionales
    const metodoContacto = document.querySelectorAll('input[name="contacto[contacto]"]');
    metodoContacto.forEach(input => input.addEventListener('click', mostrarMetodosContacto));
}

function navegacionResposive() {
    const navegacion = document.querySelector('.navegacion');

    if(navegacion.classList.contains('mostrar')) {
        navegacion.classList.remove('mostrar');
    } else {
        navegacion.classList.add('mostrar');
    }
}

function mostrarMetodosContacto(e) {
    const contactoDiv = document.querySelector('#contacto');

    if(e.target.value === 'telefono') {
        contactoDiv.innerHTML = `
            <label for="telefono">Número De Teléfono:</label>
            <input id="telefono" type="tel" placeholder="Teléfono" name="contacto[telefono]" required>

            <p>Elija la fecha y la hora para la llamada</p>

            <label for="fecha">Fecha:</label>
            <input id="fecha" type="date" name="contacto[fecha]" required>

            <label for="hora">Hora:</label>
            <input id="hora" type="time" min="09:00" max="18:00" name="contacto[hora]" required>
        `;
    }else {
        contactoDiv.innerHTML = `
            <label for="email">E-mail:</label>
            <input id="email" type="email" placeholder="Tu Email" name="contacto[email]" required>
        `;
    }
}