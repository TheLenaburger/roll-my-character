const config = require('../config.js')
const store = require('../store.js')

const create = function (character) {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: character
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiUrl + '/characters/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/characters/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/characters/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  create,
  index,
  show,
  update,
  destroy
}
