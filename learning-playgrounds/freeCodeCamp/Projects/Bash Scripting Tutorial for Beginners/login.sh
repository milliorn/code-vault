#!/bin/bash

case ${1,,} in
scott | administrator)
  echo "Hello boss!"
  ;;
help)
  echo "Just your username"
  ;;
*)
  echo "Hello stranger"
  ;;
esac
