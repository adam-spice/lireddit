export const validateEmail = (email: string) => {
  var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(mailFormat)) {
    return true;
  } else {
    return false;
  }
};
