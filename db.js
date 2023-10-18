const mongoose = require("mongoose");

function connectdb() {
  mongoose.connect(
    'mongodb+srv://pihuasa86:Sahil@2003@cluster0.ehbljmh.mongodb.net/carrental',
    {
      useNewUrlParser: true, // Use the new URL parser
      useUnifiedTopology: true, // Use the new server discovery and monitoring engine
    }
  );

  const db = mongoose.connection;

  db.on('connected', () => {
    console.log('MongoDB connection successful');
  });

  db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
}

connectdb();

module.exports = mongoose; // Export the Mongoose connection
