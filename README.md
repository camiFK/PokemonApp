<p align='center'>
    <img width='450' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GvdWtQW1A5bkgke8PwgS-Z1GE6AIgblKGg&usqp=CAU' </img>
</p>

## Description
Single Page Application (SPA) designed and developed for Henry Bootcamp as an Individual Project.

## Technologies
- [ ] React
- [ ] Redux
- [ ] Css Modules - Styled Components (no frameworks)
- [ ] Express
- [ ] Sequelize - Postgres
- [ ] API - [pokeapi](https://pokeapi.co/)

## Database
#### Models
#### Pokemon:
- UUID (to avoid problems with api ids)
- Name
- Types
- Life
- Strength
- Defense
- Speed
- Height
- Weight
#### Types:
- Id
- Name

Intermediate table to relate both entities.

## Backend
<p>
Node/Express server.
Filtering, ordering, and paging provided by the external API haven't been used. All these features have been implemented by me.
<p>
  
### Routes
  
 - [ ] __GET /pokemons__:
   - Gets a list of 52 Pokémons from pokeapi.
   - Returns necessary data for the main route.
 - [ ] __GET /pokemons?name="..."__:
   - Gets the pokemon whose name matches the query parameter (may be from the API or Database).
   - If there is no matching, a message is shown.
 - [ ] __GET /pokemons/{id}__:
   - Gets the detail from the pokemon selected according to the id (may be from the API or Database).
   - Returns necessary data for the detailed route.
 - [ ] __GET /types__:
   - Gets all Pokémon types.
   - First, a call to the pokeapi is made to save the results in the database. Then, data is used directly from the database.
 - [ ] __POST /pokemons__:
   - Receives from body the data collected from the controlled form.
   - Creates a new Pokémon in the database.

## Frontend
<p>
React/Redux application.
<p>

### Routes
  
 __Landing Page__:
- [ ] Representative image for the project.
- [ ] Home button.
  
__Main Route__:
- [ ] Search bar for searching Pokémons.
- [ ] Pokémon cards. Information shown:
  - Image
  - Name
  - Types
- [ ] Filter by API Pokemons and database ones.
- [ ] Sort by ascending or descending (alphabetically or by strength).
- [ ] Pagination to show and list all Pokemons (12 per page).
  
__Detail Route__:
- [ ] Fields shown in the main route (image, name, and types).
- [ ] Pokemon id.
- [ ] Statistics (life, strength, defense, speed).
- [ ] Height and Weight.

__Creation Route__: 
- [ ] JavaScript controlled form to fill in with the information in the detail route.
- [ ] Add one or two types of pokemon.
- [ ] Button for creating new Pokemons.
