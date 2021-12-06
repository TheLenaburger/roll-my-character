'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const characterEvents = require('./characters/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-character').on('submit', characterEvents.onCreateCharacter)
  $('#show-all-characters').on('click', characterEvents.onIndexCharacters)
  $('#show-character').on('submit', characterEvents.onShowCharacter)
  $('#update-character').on('submit', characterEvents.onUpdateCharacter)
  $('#delete-character').on('submit', characterEvents.onDeleteCharacter)
})
