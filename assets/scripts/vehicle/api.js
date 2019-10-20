'use strict'

const config = require('../config.js')
const store = require('../store.js')

const addVehicle = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/vehicles',
    data: formData,
    headers: {
        Authorization: `Token token=${store.user.token}`
      }
  })
}

module.exports = {
    addVehicle
}