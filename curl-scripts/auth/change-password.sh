curl "https://parking-lot-registration.herokuapp.com" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
  "password": {
    "old": "'"${OLD}"'",
    "new": "'"${NEW}"'"
  }
}'

echo
