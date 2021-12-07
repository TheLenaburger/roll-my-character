const store = require('../store')

const removeFeedback = function () {
  setTimeout(() => {
    $('#user-feedback').removeClass().text('')
  }, 5000)
}

const onError = function (error) {
  $('#user-feedback').text('There was an error handling that request. Please check your inputs and try again.')
  $('#user-feedback').addClass('text-danger')

  removeFeedback()
  console.error(error)
}

const signInSuccess = function (responseData) {
  // stores user credentials for auth purposes
  store.user = responseData.user

  // gives user feedback that they successfully signed in
  $('#user-feedback').addClass('text-success').text("You've signed in successfully!")
  $('form').trigger('reset')

  // updates ui: hiding sign up/in functions and revealing the major functionality
  $('#before-sign-in').hide(1000)
  $('#after-sign-in').show(1000)

  removeFeedback()
}

const signOutSuccess = function () {
  $('#user-feedback').addClass('text-success').text("You've successfully signed out; see ya next time!")
  $('form').trigger('reset')

  // reset ui, hiding all authorized functionality and showing the login/sign up forms
  $('#after-sign-in').hide(1000)
  $('#before-sign-in').show(1000)

  removeFeedback()
}

module.exports = {
  onError,
  signInSuccess,
  signOutSuccess
}
