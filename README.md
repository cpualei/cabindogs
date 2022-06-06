
<h1 align="center">CABINDOGS</h1>

<h3 align="center">Cabin Rentals for you and your furry friends too</h3>

<p align="center">What is a getaway from home when your best friend can't come and is left all alone? SAD! CABINDOGS provides the best cabin rentals from all across the world, and now you can bring your best pals too!</p>


<p align="center"><a  href="https://cabindogs.herokuapp.com/">Demo CABINDOGS now!</a></p>




<img width="1425" alt="Screen Shot 2022-06-06 at 1 48 33 AM" src="https://user-images.githubusercontent.com/93879557/172131619-ed673635-18da-4d70-8b0a-8bc887e81a5a.png">
Splash Page

<img width="1422" alt="Screen Shot 2022-06-06 at 1 50 18 AM" src="https://user-images.githubusercontent.com/93879557/172131946-cb48bb14-f501-4415-a990-0ad3194a3a6c.png">
Listings Page

<img width="1426" alt="Screen Shot 2022-06-06 at 1 52 40 AM" src="https://user-images.githubusercontent.com/93879557/172132078-5e9d2fff-0887-43b7-93a1-fd099f097ded.png">
Listings Details

<img width="1440" alt="Screen Shot 2022-06-06 at 2 13 50 AM" src="https://user-images.githubusercontent.com/93879557/172132273-33483f89-4303-4a93-9421-50a4160311e8.png">
All Bookings

<br><br>


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
7. Have fun!

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
In the near future I will include Google maps to the listings page to provide locations for each listing.

<br><br>

### Contact
<a href="https://www.linkedin.com/in/caitlin-buen-lucas/">Linkedin</a> | <a href="https://github.com/cpualei/">Github</a> |
<a href="https://github.com/frances-y-h/mememo/wiki">Git Wiki for mememo</a>
