# Parking Lot Registration - client 

### Repository link: https://github.com/khalsaniwas/parking-lot-registration-client

### Description

This is a user interface where users can interact to sign-up and create accounts and register their vehicles. Users can interact with application through input forms and button. Users can add and edit their vehicles with clicks. Data is sent back to backend application through api and gets stored in database. Users can create, delete, update and get vehicles.

## parking-lot-registration (backend api)

### Repository link: https://github.com/khalsaniwas/parking-lot-registration

## Link to deployed sites

### Production site link: https://khalsaniwas.github.io/parking-lot-registration-client/

### Development site link: http://localhost:7165/

## Technologies used

Github
Atom
Bootstrap
Handlebars
javascript
visual studio code
Terminal
web browser
dev tool
css
html
ajax
jquery

## Wire frame

![wireframe diagram](./img/wireframe.jpg)

## Planning

I planned according to my wireframes to show how each screen will look like when user is signed up and signed in, then hide these buttons and show only change password and sign in buttons. 
I wanted an easy way to display a list of vehicles to the current user and planned to display data in from of tables, where user can edit and delete the rows just by clicking the buttons.

## Development story

when I started implementing the rules for authentication part, I came up with the idea of having all four buttons on top bar and disable change password, sign out button for new user. Once signed up and signed in, change password and sign out buttons become active. I used bootstrap to display all buttons on top bar and drop down classes from bootstrap to make the buttons show dropdown form fields when user clicks on them. That way It looks lot cleaner and saves space on screen. I used remove class on those form fields so that once user click on submit button the form close by itself without hovering out of form fields window and click somewhere else, I feel that is great user experience to have.
I added form fields on signed in screen so that user can add information about his vehicle and can complete the registration with click of button. For that I created another button called Add Vehicle. Once user has register vehicles, I added another button named "Vehicle list" to get the list of vehicles that user has registered. To get that information in efficent and faster way, I used handlebars. Implementing handlebars was not an easy task. Handlebars made it very easy for me to pull and display information in form of table. I used edit and delete buttons with handlebars to display them in each row of registered vehicle to make it easier for user to edit and delete their vehicle. This is also a great user experience.
Third great user experienc is to give user his current information in the formfields while updating vehicle information so that user do not have to enter formfield again. This way users can edit the field that they want to and can press submit button to save changes.

## Unsolved problems

I will work on to make the interface more interactive for user, adding drop down lists to the form fields for vehicle make and model selection.
I will add more colums for saving user's name and telephone number.


## User Stories

Vehicle registration User stories
* [x] As a user, I want to get home page with logo, so that i can see welcome text.
* [X] As a signed in user, I want to see my vehicle listing, so that I can see them all in one place.
* [x] As a signed in user, I want to add my vehicle, so that I can register it.
* [x] As a signed in user, I want to edit my vehicle, so that I can update vehicle information.
* [X] As a signed in user, I want to delete my vehicle.

user signup stories
* [x] As a user, I want to click on sign-up button, so that i can sign-up with email, password, name, mobile phone number.
* [x] As a user , I want to show a success message after clicking  sign-up button, so that i can see if sign-up is successful.
* [x] As a user, I want to show a failure message after sign-up, so that i can see if sign-up failed.
* [x] As a user, I want to click on sign-in button, so that i can sign-in to the app.
* [x] As a user , I want to show a success message after sign-in, so that i can see if sign-in is successful.
* [x] As a user, I want to show a failure message after sign-in, so that i can see if sign-in failed.
* [x] As a user, I want to click on change-password button, so that i can change my password by entering my old password and new password.
* [x] As a user , I want to show a success message after change-password, so that i can see if change-password is successful.
* [x] As a user, I want to show a failure message after clicking change-password button, so that i can see if change-password failed.
* [x] As a user, I want to click on sign-out button, so that i can sign out of app.
* [x] As a user, I want to show a success message after clicking sign-out, so that i can see if sign-up is successful.
* [x] As a user, I want to show a failure message after clicking sign-out button, so that i can see if sign-out  failed.
* [x] As a new user, I want to see only Sign-up and sign-in button
* [x] As a user, I want to activate sign-out and change-password button after sign-in
* [x] As a user, I want to disable signup and sign-in button after sign-in
* [x] As a user, I want to activate sign-up and sign-in after sign-out and disable change-password and sign-out button.


## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them
- `grunt deploy`: builds and deploys master branch


## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
