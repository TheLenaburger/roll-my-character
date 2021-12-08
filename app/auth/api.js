const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data: formData
  })
}

const autoSignIn = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data: {
      credentials: {
        email: formData.credentials.email,
        password: formData.credentials.password
      }
    }
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data: formData
  })
}

const signOut = () => {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  autoSignIn,
  signIn,
  signOut
}
