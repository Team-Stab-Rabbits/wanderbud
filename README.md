## Project's Title 
WanderBud

## Project Description

WanderBud is a social-media like travel platform which allows users to view and join their friend's upcoming journeys.

WanderBud was constructed using a React/Redux front-end with heavy utilization of React and Redux hooks. The back-end was constructed using Express, and the data is stored in a PostgresSQL database. Wanderbud also includes a test suite which primarily incorporates Jest and React Testing Library.

In the future, we woud like to implement a 'friends' system and unique landing pages for friends and strangers' journeys.

## How to create a new database

You'll need to use your own database to test any work done on this project. There is a SQL creation script which has already defined the appropriate tables. To create the database on ElephantSQL, head to their website, create a new instance, navigate to the browser section, copy the connection uri, then run the following command in the terminal:

psql -d <url from elephantSQL> -f ./database/postgres_create.sql

The table schemas are also available for reference in the SQL creation script.

##  How to Install and Run the Project

To install the project, fork and clone the repo to your local machine then install the relevant packages using the terminal command 'npm i'. Once the packages are installed, the app can be accessed at localhost:8080 after running the terminal command 'npm run dev'

## How to Use the Project

Enjoy joining journeys :)

## Contributors

Davis Zung @daviszung
Dominic Genuario @D-Genuario
HyeJin Kim @hyejinkim
Jacob Policano @jdpolicano
Paul Yi @PsyreKR

Yusuf Nevruz Olmez @nevruzolmez
Josephine Chen @chenjosephine
Jasmair Jaswal @twojaytech
Iraj Zuberi @izuberi

