function loginValidation(data) {
  let errors = {};

  //Validar Username------------------------------>
  if (!data.username) {
    errors.username = "El username es obligatorio";
  } else if (data.username.length > 20) {
    errors.username = "El username no puede tener más de 20 caracteres";
  }
  //Validar Password---------------------------->
  if (!data.password) {
    errors.password = "El password es obligatorio";
  } else if (data.password.length < 8) {
    errors.password = "El password debe contener al menos 8 caracteres";
  }

  return errors;
}
export default loginValidation;
