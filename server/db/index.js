var mongoose = require('mongoose');
const mongoUri='mongodb://localhost/student';
mongoose.connect(mongoUri, { useMongoClient: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to database');
});
