const removeFeedback = function () {
  setTimeout(() => {
    $('#user-feedback').removeClass().text('')
  }, 5000)
}

const onCreateCharacterSuccess = function () {
  $('#user-feedback').addClass('text-success').text('Character created successfully!')
  $('form').trigger('reset')

  removeFeedback()
}

const onIndexCharactersSuccess = function (responseData) {
  const characters = responseData.characters

  let charactersHtml = ''

  characters.forEach(character => {
    charactersHtml += `
      <div>
        <h4>Name: ${character.name}</h4>
        <p>Race: ${character.race}</p>
        <p>Class: ${character.class}</p>
        <p>ID: ${character._id}</p>
      </div>
    `
  })

  $('#character-display').html(charactersHtml)
}

const onShowCharacterSuccess = function (responseData) {
  const character = responseData.character
  const characterHtml = `
    <div>
      <h4>Name: ${character.name}</h4>
      <p>Race: ${character.race}</p>
      <p>Class: ${character.class}</p>
    </div>
  `

  $('#character-display').html(characterHtml)
  $('form').trigger('reset')
}

const onUpdateCharacterSuccess = function () {
  $('#user-feedback').addClass('text-success').text('Character was updated successfully!')
  $('form').trigger('reset')

  removeFeedback()
}

const onDeleteCharacterSuccess = function () {
  $('#user-feedback').addClass('text-success').text('Character was deleted successfully.')
  $('form').trigger('reset')

  removeFeedback()
}

const onError = function (err) {
  console.error(err)

  $('#user-feedback').text('Something went wrong, please try again')
  $('#user-feedback').addClass('text-danger')
  $('form').trigger('reset')

  removeFeedback()
}

module.exports = {
  onCreateCharacterSuccess,
  onIndexCharactersSuccess,
  onShowCharacterSuccess,
  onUpdateCharacterSuccess,
  onDeleteCharacterSuccess,
  onError
}
