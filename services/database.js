const mongoose = require('mongoose');


//database connection
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useCreateIndex: true }).then((e) => {
  console.log('database connected');
}).catch((err) => {
  console.log(err);

  // console.log('databse connection error');
});
