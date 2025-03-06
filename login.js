// Simulamos el archivo JSON que contiene los usuarios y contraseñas
const usuarios = {
  "49460426": {
    id: 0,
    contraseña: "2277",
    nombreCompleto: "Andrés Gabriel Morillo Figueroa",
    añoCursando: 4,
    comportamiento: "exelente",
    correo: "agmorillofigueroa@escuelasproa.edu.ar",
    OP: true  // Variable OP para este usuario
  },
  "50245080": { 
    id: 1,
    contraseña: "1messigay5",
    nombreCompleto: "Ariel Valentin Ruizdiaz",
    añoCursando: 4,
    comportamiento: "nefasto",
    correo: "avruizdiaz@escuelasproa.edu.ar",
    OP: false  // Variable OP para este usuario
  },
  "49757518": {
    id: 2,
    contraseña: "petit",
    nombreCompleto: "Lautaro Otto Breininger",
    añoCursando: 4,
    comportamiento: "autista",
    correo: "lbreininger@escuelasproa.edu.ar",
    OP: true  // Variable OP para este usuario
  },
  "51420730": {
    id: 3,
    contraseña: "Safirceballos",
    nombreCompleto: "Safir Tiziano Ceballos",
    añoCursando: 2,
    comportamiento: "Regular",
    correo: "schavezceballos@escuelasproa.edu.ar",
    OP: false  // Variable OP para este usuario
  }
};

// Función para manejar el inicio de sesión
function iniciarSesion() {
  let nombre = document.getElementById('nombre').value;
  let contrasena = document.getElementById('contrasena').value;

  // Verificar si el nombre de usuario (DNI) existe y si la contraseña es correcta
  if (usuarios[nombre] && usuarios[nombre].contraseña === contrasena) {
    // Guardar al usuario logueado en el localStorage, junto con la variable OP
    const usuarioLogueado = usuarios[nombre];
    localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioLogueado));

    alert('Bienvenido ' + usuarioLogueado.nombreCompleto);
    
    // Aquí puedes hacer lo que quieras con la variable OP, por ejemplo:
    console.log('Variable OP para este usuario:', usuarioLogueado.OP);

    window.location.href = 'perfil.html'; // Redirigir al perfil
  } else {
    alert('Nombre de usuario o contraseña incorrectos');
  }
}
