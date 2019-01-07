#!/bin/ash

printf "\n\n======================================\n"
printf "Run the migration"
printf "\n======================================\n\n"
export NODE_ENV=development
yarn run db:rollmigrate

printf "\n\n======================================\n"
printf "Start the application"
printf "\n======================================\n\n"
export NODE_ENV=development
yarn start:dev

exit 0
