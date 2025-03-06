// Cargar los usuarios desde el archivo JSON usando fetch
async function cargarUsuarios() {
  const response = await fetch('personas.json');
  const usuarios = await response.json();
  return usuarios;
}

// Función para manejar el inicio de sesión
async function iniciarSesion() {
  let nombre = document.getElementById('nombre').value;
  let contrasena = document.getElementById('contrasena').value;

  // Cargar los usuarios desde el archivo JSON
  const usuarios = await cargarUsuarios();

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
