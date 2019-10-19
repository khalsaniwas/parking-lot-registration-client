curl "https://parking-lot-registration.herokuapp.com/sign-in" \
--include \
--request POST \
--header "content-Type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'"
  }
}'

echo
