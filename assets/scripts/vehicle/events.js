'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddVehicle = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.addVehicle(formData)
    .then(ui.onAddVehicleSuccess)
    .catch(ui.onAddVehicleFailure)
}

module.exports = {
  onAddVehicle
}
