#!/bin/bash

# This script interacts with a salon database to schedule appointments.
# It prompts the user for service selection, customer information, and appointment time.

# Set the PSQL command for executing PostgreSQL queries
# The --tuples-only flag modifies the output format of psql to only display the result rows, 
# without any headers or row counts.
PSQL="psql -X --username=freecodecamp --dbname=salon --tuples-only -c"

# Display a welcome message
echo -e "\n~~~~~ MY SALON ~~~~~\n"
echo -e "Welcome to My Salon, how can I help you?\n"

# Function to get the IDs and names of services from the database
GET_SERVICES_ID() {
  # If there is an argument passed to the function
  if [[ $1 ]]; then
    echo -e "\n$1"
  fi

  # Fetch the list of services from the database
  LIST_SERVICES=$($PSQL "SELECT * FROM services")

  # Loop through each service and display its ID and name
  echo "$LIST_SERVICES" | while read SERVICE_ID BAR SERVICE; do
    ID=$(echo $SERVICE_ID | sed 's/ //g')
    NAME=$(echo $SERVICE | sed 's/ //g')
    echo "$ID) $SERVICE"
  done

  # Prompt the user to select a service ID
  read SERVICE_ID_SELECTED

  # Perform different actions based on the selected service ID
  case $SERVICE_ID_SELECTED in
  [1-5]) NEXT ;;
  *) GET_SERVICES_ID "I could not find that service. What would you like today?" ;;
  esac
}

# Function for the next step after service selection
NEXT() {
  echo -e "\nWhat's your phone number?"
  read CUSTOMER_PHONE

  # Check if the customer's phone number exists in the database
  NAME=$($PSQL "SELECT name FROM customers WHERE phone='$CUSTOMER_PHONE'")
  CUSTOMER_NAME=$(echo $NAME | sed 's/ //g')

  # If the customer's phone number is not found, prompt for their name and save it to the database
  if [[ -z $NAME ]]; then
    echo -e "\nI don't have a record for that phone number, what's your name?"
    read CUSTOMER_NAME
    NAME=$(echo $NAME | sed 's/ //g')
    SAVED_TO_TABLE_CUSTOMERS=$($PSQL "INSERT INTO customers(name,phone) VALUES('$NAME','$CUSTOMER_PHONE')")
  fi

  # Fetch the name of the selected service from the database
  GET_SERVICE_NAME=$($PSQL "SELECT name FROM services WHERE service_id=$SERVICE_ID_SELECTED")
  SERVICE_NAME=$(echo $GET_SERVICE_NAME | sed 's/ //g')

  # Fetch the customer ID from the database using the phone number
  CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone='$CUSTOMER_PHONE'")

  # Prompt the user for the appointment time
  echo -e "\nWhat time would you like your $SERVICE_NAME, $CUSTOMER_NAME?"
  read SERVICE_TIME

  # Save the appointment details to the appointments table in the database
  SAVED_TO_TABLE_APPOINTMENTS=$($PSQL "INSERT INTO appointments(customer_id, service_id, time) VALUES($CUSTOMER_ID, $SERVICE_ID_SELECTED, '$SERVICE_TIME')")

  # If the appointment was successfully saved, display a confirmation message
  if [[ $SAVED_TO_TABLE_APPOINTMENTS == "INSERT 0 1" ]]; then
    echo -e "\nI have put you down for a $SERVICE_NAME at $SERVICE_TIME, $CUSTOMER_NAME."
  fi
}

# Call the function to start the appointment scheduling process
GET_SERVICES_ID
