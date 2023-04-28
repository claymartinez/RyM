const validation = (userData) => {
  const errors = {};

  if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)
  ) {
    errors.email = 'el email ingresado no es valido';
  }
  if (!userData.email) {
    errors.email = 'debe ingresar un email';
  }
  if (userData.email.lengt > 35) {
    errors.email = 'el email no debe superar los 35 caracteres';
  }

  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = 'la contraseña debe contener al menos un numero';
  }
  if (userData.password.length < 6 || userData.password.lengt > 10) {
    errors.password =
      'la contraseña debe tener un tamaño entre 6 y 10 caracteres';
  }

  return errors;
};

export default validation;
