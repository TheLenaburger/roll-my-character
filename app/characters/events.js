const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const onCreateCharacter = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.create(formData)
    .then(ui.onCreateCharacterSuccess)
    .catch(ui.onError)
}

const onIndexCharacters = () => {
  api.index()
    .then(ui.onIndexCharactersSuccess)
    .catch(ui.onError)
}

const onShowCharacter = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)
  const id = formData.character._id

  api.show(id)
    .then(ui.onShowCharacterSuccess)
    .catch(ui.onError)
}

const onUpdateCharacter = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)
  const id = formData.character._id

  api.update(id, formData)
    .then(ui.onUpdateCharacterSuccess)
    .catch(ui.onError)
}

const onDeleteCharacter = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)
  const id = formData.character._id

  api.destroy(id)
    .then(ui.onDeleteCharacterSuccess)
    .catch(ui.onError)
}

module.exports = {
  onCreateCharacter,
  onIndexCharacters,
  onShowCharacter,
  onUpdateCharacter,
  onDeleteCharacter
}
