const ENV = 'prod';

let urlBase = null;

if (ENV === 'prod') {
  urlBase = 'https://tattoo-code-api.herokuapp.com';
} else if (ENV === 'dev') {
  urlBase = 'http://192.168.2.120:3000';
}

export const loginRoute = `${urlBase}/auth/signin`;
export const verifyTokenRoute = `${urlBase}/auth/token`;
export const registerUserByEmailRoute = `${urlBase}/auth/register/email`;
export const registerUserByFacebookRoute = `${urlBase}/auth/register/facebook`;
export const registerUserByGoogleRoute = `${urlBase}/auth/register/google`;

export const loadProfileHeaderRoute = `${urlBase}/api/user/profile`;
export const loadProfileImagesRoute = `${urlBase}/api/perfil/`; //perfil/id
export const feedRoute = `${urlBase}/api/feed`;
