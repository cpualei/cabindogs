
<h1 align="center">CABINDOGS</h1>

<h3 align="center">Cabin Rentals for you and your furry friends too</h3>

<p align="center">What is a getaway from home when your best friend can't come and is left all alone? SAD! CABINDOGS provides the best cabin rentals from all across the world, and now you can bring your best pals too!</p>


<p align="center"><a  href="https://cabindogs.herokuapp.com/">Demo CABINDOGS now!</a></p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/93879557/176935906-b4f611fb-bb8e-410a-bd5d-90612f6c4a5b.gif" />
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/93879557/176939402-d919a32d-af4f-48c6-8bbb-3277c835ad6a.gif" />
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/93879557/176943591-4071e3a5-d9d7-444f-82ab-78960fd4d806.gif" />
</p>


## CABINDOGS at a Glance

CABINDOGS is a full stack application that provides users an extensive variety of cabins to rent and allows those who own cabins to list their cabins as well. Users are required to sign up for an account to both list and rent cabins.

### Getting started
1. Clone this repository
```
git clone https://github.com/cpualei/cabindogs.git
```
2. Install dependencies
```
npm install
```
3. Create a .env file based on the example with proper settings for your development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your .env file
5. Migrate and seed your database
```
npx dotenv sequelize db:create
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all
```
6. Run `npm start` in folder "backend", then run `npm start` in folder "frontend"

<br><br>

### Application Architecture
CABINDOGS is built with Express (backend), React and Redux (frontend), and PostgresSQL (database).

#### Techonologies Used
* [React.js](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Javascript](https://www.javascript.com/)
* [PostgresSQL](https://www.postgresql.org/)
* [Sequelize](https://sequelize.org/)
* [Express.js](https://expressjs.com/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

<br><br>

### Future Features
In the near future I will include Google maps to the listings page to provide locations for each listing. I would also like to include a calendar which works with my website, allowing users to book dates and fill a listing's booking dates.

<br><br>

### Contact
<a href="https://www.linkedin.com/in/caitlin-buen-lucas/">Linkedin</a> | <a href="https://github.com/cpualei/">Github</a> |
<a href="https://github.com/cpualei/cabindogs/wiki">Git Wiki for CABINDOGS</a>
