'use strict'

const store = require('../store')
const showVehiclesTemplate = require('../templates/vehicles-list.handlebars')

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

const onGetMyVehicleSuccess = (data) => {
  store.vehicles = data.vehicles
  const showVehiclesHtml = showVehiclesTemplate({ vehicles: data.vehicles })
  $('#my-table').html(showVehiclesHtml)
}




module.exports = {
  onAddVehicleSuccess,
  onAddVehicleFailure,
  onGetMyVehicleSuccess
}