const mongoose = require('mongoose');

// let db = 'mongodb://neo:D3v$@13.232.181.171:27017/movies'

//database connection
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useCreateIndex: true }).then((e) => {
  console.log('database connected');
}).catch((err) => {
  console.log(err);

  // console.log('databse connection error');
});
