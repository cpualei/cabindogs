-- SEQUELIZE COMMANDS --
Models:
  npx sequelize-cli model:generate --name Listings --attributes userId:integer,name:string,state:string,country:string,cost:integer,img1:string,img2:string,img3:string,img4:string

  npx sequelize-cli model:generate --name Bookings --attributes userId:integer,listingId:integer,totalCost:integer,startDate:date,endDate:date


-- HEROKU RESEED COMMAND --
heroku restart && heroku pg:reset DATABASE --confirm cabindogs && heroku run npm run sequelize db:migrate && heroku run npm run sequelize db:seed:all
