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

const getMyVehicle = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/vehicles',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// const EditVehicle = function () {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/vehicles',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

module.exports = {
    addVehicle,
    getMyVehicle
}