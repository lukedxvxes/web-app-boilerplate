export function validatePassword(value: string) {
  let error;
  if (!value) {
    error = 'Password is required';
  }
  return error;
}

export function validateEmail(value: string) {
  let error;
  if (!value) {
    error = 'Email is required';
  }
  return error;
}

export function validateFirstName(value: string) {
  let error;
  if (!value) {
    error = 'First name is required';
  }
  return error;
}

export function validateLastName(value: string) {
  let error;
  if (!value) {
    error = 'Last name is required';
  }
  return error;
}

export function validateUsername(value: string) {
  let error;
  if (!value) {
    error = 'Username is required';
  }
  return error;
}
