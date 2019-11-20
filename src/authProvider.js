import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin'

const authProvider = (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params
    const request = new Request(`${process.env.REACT_APP_API_ENTRYPOINT}/login_check`, {
      method: 'POST',
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then(({ token }) => {
        localStorage.setItem('token', token)
      })
  }

  if (type === AUTH_ERROR) {
    const status = params.status
    if (status === 401 || status === 403) {
      localStorage.removeItem('token')
      return Promise.reject()
    }
    return Promise.resolve()
  }

  // On vérifie qu'on a bien un token a chaque changement de page. Sinon on est rediriger vers le login
  if (type === AUTH_CHECK) {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject()
  }

  // Sur l'action logout on supprime le token
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('token')
    return Promise.resolve()
  }

  return Promise.resolve()
}

export default authProvider
