<h1 align="center">CABINDOGS</h1>

<h3 align="center">Cabin Rentals for you and your furry friends too</h3>

<p align="center">What is a getaway from home when your best friend can't come and is left all alone? SAD! CABINDOGS provides the best cabin rentals from all across the world, and now you can bring your best pals too!</p>


<!-- <p align="center"><a  href="https://mememo.herokuapp.com/">Demo CABINDOGS now!</a></p>


<img width="866" alt="Screen Shot 2022-05-06 at 6 31 31 PM" src="https://user-images.githubusercontent.com/97005157/167232667-8c150ab3-f8b6-42e7-aa5a-ed45a44bdf9c.png">
Splash page
<br><br>

<img
  style="width: 100%; margin: auto; display: block;"
  class="vidyard-player-embed"
  src="https://play.vidyard.com/DNPE6XneUjofbBCjsSbeGt.jpg"
  data-uuid="DNPE6XneUjofbBCjsSbeGt"
  data-v="4"
  data-type="inline"
/>
Click to play demo video.
<br><br>
![Screen Shot 2022-05-07 at 8 30 43 AM](https://user-images.githubusercontent.com/97005157/167261089-28e53377-24f6-44c2-b5b9-d8d56e79408e.png)

Organize your notes with colorful tags.
<br><br>
![Screen Shot 2022-05-07 at 8 49 07 AM](https://user-images.githubusercontent.com/97005157/167261811-e54dcd34-d417-4e23-a26a-06e5d813e5d0.png)
Organize notebooks by drag and drops -->


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

### Future Features
In the near future I will include Google maps to the listings page to provide locations for each listing.

### Contact
<a href="https://www.linkedin.com/in/caitlin-buen-lucas/">Linkedin</a> | <a href="https://github.com/cpualei/">Github</a> |
<a href="https://github.com/frances-y-h/mememo/wiki">Git Wiki for mememo</a>
