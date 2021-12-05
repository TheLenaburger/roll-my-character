'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(() => api.autoSignIn(formData))
    .then(ui.signInSuccess)
    .catch(ui.onError)
}

const onSignIn = function (event) {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.onError)
}

const onSignOut = () => {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
