const store = require('../store')

const onError = function (error) {
  $('#user-feedback').text('There was an error handling that request. Please check your inputs and try again.')
  $('#user-feedback').addClass('text-danger')

  setTimeout(() => {
    $('#user-feedback').removeClass('text-danger')
    $('#user-feedback').text('')
  }, 5000)

  console.error(error)
}

const signInSuccess = function (responseData) {
  // stores user credentials for auth purposes
  store.user = responseData.user

  // gives user feedback that they successfully signed in
  $('#user-feedback').addClass('text-success').text("You've signed in successfully!")
  $('form').trigger('reset')

  // updates ui: hiding sign up/in functions and revealing the major functionality

  // removes the pop-up message letting user know they've signed in after a 5 sec delay
  setTimeout(() => {
    $('#user-feedback').removeClass('text-success').text('')
  }, 5000)
}

const signOutSuccess = function () {
  $('#user-feedback').addClass('text-success').text("You've successfully signed out; see ya next time!")
  $('form').trigger('reset')

  // reset ui, hiding all authorized functionality and showing the login/sign up forms

  setTimeout(() => {
    $('#user-feedback').removeClass('text-success').text('')
  }, 5000)
}

module.exports = {
  onError,
  signInSuccess,
  signOutSuccess
}
