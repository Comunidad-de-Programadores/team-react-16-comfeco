export function registerValidation(data) {
  let errors = {};

  //Validar Username---------------------------->
  if (!data.username) {
    errors.username = "El username es obligatorio";
  } else if (data.username.length > 20) {
    errors.username = "El username no puede tener más de 20 caracteres";
  }

  //Validar Email------------------------------>
  if (!data.email) {
    errors.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    errors.email = "Email no válido";
  }
  //Validar Password---------------------------->
  if (!data.password) {
    errors.password = "El password es obligatorio";
  } else if (data.password.length < 6) {
    errors.password = "El password debe contener al menos 6 caracteres";
  }
  if (!data.confirm) {
    errors.confirm = "Debes confirmar el password";
  } else if (data.confirm !== data.password) {
    errors.confirm = "No coíncide con el password introducido anteriormente";
  }
  return errors;
}
