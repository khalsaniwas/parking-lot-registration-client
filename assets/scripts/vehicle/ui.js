'use strict'

const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('alert-warning')
  $('#message').addClass('alert-success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-warning')
}

const onAddVehicleSuccess = function () {
  successMessage('Vehicle created successfully')
  $('#add-vehicle').trigger('reset')
}

const onAddVehicleFailure = function () {
  failureMessage('Failed to create vehicle')
  $('#add-vehicle').trigger('reset')
}


module.exports = {
  onAddVehicleSuccess,
  onAddVehicleFailure
}