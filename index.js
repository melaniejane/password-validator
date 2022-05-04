const validatePassword = (password) => {
  if (password.length <= 8) {
    return false;
  }
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSpecial = false;
  for (let index = 0; index < password.length; index++) {
    const passwordIndex = password[index];
    if (upperCase(passwordIndex)) {
      hasUpper = true;
    } else if (lowerCase(passwordIndex)) {
      hasLower = true;
    } else if (numValue(passwordIndex)) {
      hasNumber = true;
    } else if (specialCharacter(passwordIndex)) {
      hasSpecial = true;
    }
  }
  return hasUpper && hasLower && hasNumber && hasSpecial;
};

const upperCase = (letter) => {
  const upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let index = 0; index < upperCaseLetter.length; index++) {
    const upperCaseIndex = upperCaseLetter[index];
    if (letter.indexOf(upperCaseIndex) >= 0) return true;
  }
  return false;
};

const lowerCase = (letter) => {
  const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
  for (let index = 0; index < lowerCaseLetter.length; index++) {
    const lowerCaseIndex = lowerCaseLetter[index];
    if (letter.indexOf(lowerCaseIndex) >= 0) return true;
  }
  return false;
};

const numValue = (number) => {
  const numValueNumber = "0123456789";
  for (let index = 0; index < numValueNumber.length; index++) {
    const numberIndex = numValueNumber[index];
    if (number.indexOf(numberIndex) >= 0) return true;
  }
  return false;
};

const specialCharacter = (char) => {
  const specChars = "!@#$%^&*()";
  for (let index = 0; index < specChars.length; index++) {
    const specIndex = specChars[index];
    if (char.indexOf(specIndex) >= 0) return true;
  }
  return false;
};

module.exports = validatePassword;
