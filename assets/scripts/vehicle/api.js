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

const deleteVehicle = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: `${config.apiUrl}/vehicles/${formData.id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const editVehicle = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: `${config.apiUrl}/vehicles/${formData.id}`,
    data: formData,
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
    addVehicle,
    getMyVehicle,
    deleteVehicle,
    editVehicle
}