const sql = require("mssql");



var dbConfig = {
  server: "onboadringbot.database.windows.net", // Use your SQL server name
  database: "onboardingbot", // Database to connect to
  user: "volvo_onboardingbot", // Use your username
  password: "Chirag@123", // Use your password
  port: 1433,
  // Since we're on Windows Azure, we need to set the following options
  options: {
        encrypt: true
    }
 };


sql.connect(dbConfig).then(() => {
  console.log('database connected');
}).catch((e) => {
  console.log(e);
})


// const mongoose = require('mongoose');

// let db = 'mongodb://neo:D3v$@13.232.181.171:27017/movies'

// //database connection
// mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true }).then((e) => {
//   console.log('database connected');
// }).catch((err) => {
//   console.log(err);

//   // console.log('databse connection error');
// });