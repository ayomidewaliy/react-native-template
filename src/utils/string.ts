export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export function getParameterByName(name: string, uri: string) {
  var match = RegExp('[?&]' + name + '=([^&]*)').exec(uri);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

export const testPasswordStrength = (
  value: string,
  type: 'uppercase' | 'lowercase' | 'number' | 'special-character' | '8 digit',
) => {
  let result = false;

  switch (type) {
    case 'uppercase':
      result = /(?=.*[A-Z])/.test(value);
      break;
    case 'lowercase':
      result = /(?=.*[a-z])/.test(value);
      break;
    case 'number':
      result = /(?=.*[0-9])/.test(value);
      break;
    case '8 digit':
      result = /.{8}/.test(value);
      break;
    case 'special-character':
      result = /(?=.*[!@#$&*])/.test(value);
      break;
    default:
      break;
  }
  return result;
};
