#!/bin/bash

# Script that populates a PostgreSQL database with game data

# Define the PostgreSQL command based on the input argument
if [[ $1 == "test" ]]; then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi

# Truncate the 'games' and 'teams' tables
echo $($PSQL "TRUNCATE TABLE games, teams")

# Read and process each line from the 'games.csv' file
cat games.csv | while IFS="," read YEAR ROUND WINNER OPPONENT WINNER_GOALS OPPONENT_GOALS; do

  # if winner is not the header
  if [[ $WINNER != "winner" ]]; then
    # if winning team is already present in the 'teams' table
    TEAM1_NAME=$($PSQL "SELECT name FROM teams WHERE name='$WINNER'")
    if [[ -z $TEAM1_NAME ]]; then
      # Insert the winning team into the 'teams' table if it doesn't exist
      INSERT_TEAM1_NAME=$($PSQL "INSERT INTO teams(name) VALUES('$WINNER')")
      if [[ $INSERT_TEAM1_NAME == "INSERT 0 1" ]]; then
        echo "Inserted team $WINNER"
      fi
    fi
  fi

  # if opponent is not the header
  if [[ $OPPONENT != "opponent" ]]; then
    # if opponent team is already present in the 'teams' table
    TEAM2_NAME=$($PSQL "SELECT name FROM teams WHERE name='$OPPONENT'")
    if [[ -z $TEAM2_NAME ]]; then
      # Insert the opponent team into the 'teams' table if it doesn't exist
      INSERT_TEAM2_NAME=$($PSQL "INSERT INTO teams(name) VALUES('$OPPONENT')")
      if [[ $INSERT_TEAM2_NAME == "INSERT 0 1" ]]; then
        echo "Inserted team $OPPONENT"
      fi
    fi
  fi

  # if year is not the header
  if [[ YEAR != "year" ]]; then
    # Retrieve the team IDs for the winner and opponent from the 'teams' table
    WINNER_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER'")
    OPPONENT_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT'")
    # Insert the game into the 'games' table
    INSERT_GAME=$($PSQL "INSERT INTO games(year, round, winner_id, opponent_id, winner_goals, opponent_goals) VALUES ($YEAR, '$ROUND', $WINNER_ID, $OPPONENT_ID, $WINNER_GOALS, $OPPONENT_GOALS)")
    if [[ $INSERT_GAME == "INSERT 0 1" ]]; then
      echo "New game added: $YEAR, $ROUND, $WINNER_ID VS $OPPONENT_ID, score $WINNER_GOALS : $OPPONENT_GOALS"
    fi
  fi

done
