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
  $('#my-table').removeClass('d-none')
  successMessage('Below is the list of all vehicles')
}

const onGetMyVehicleFailure = function () {
  failureMessage('Failed to display list')
}

const onDeleteVehicleSuccess = function () {
  successMessage('Vehicle deleted successfully')
}

const onDeleteVehicleFailure = function () {
  failureMessage('Failed to delete vehicle')
}

const onEditVehicleSuccess = function (data) {
  successMessage('Vehicle edited successfully')
  $('#list-vehicle button').trigger('click')
  $('.edit').removeClass('show')
  $('.edit .dropdown-menu').removeClass('show')
}

const onEditVehicleFailure = function () {
failureMessage('Failed to edit vehicle')
}


module.exports = {
  onAddVehicleSuccess,
  onAddVehicleFailure,
  onGetMyVehicleSuccess,
  onGetMyVehicleFailure,
  onDeleteVehicleSuccess,
  onDeleteVehicleFailure,
  onEditVehicleSuccess,
  onEditVehicleFailure,
}
