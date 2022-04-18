const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const helmet = require('helmet');
const passport = require('passport');
const session = require('express-session');
console.log(process.env.clientID);
const passportConfig = require('./config/passport');

const app = express();

// init session mechanism
app.use(session({ secret: process.env.sessionSecret }));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

const postsRoutes = require('./routes/posts.routes');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(helmet());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));

app.use('/api', postsRoutes);
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});

// connects our backend code with the database

const NODE_ENV = process.env.NODE_ENV;
let dbUrl = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
if (NODE_ENV === 'test') dbUrl = 'mongodb://localhost:27017/newwaveDBtest';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

//let us know whether connection was successfull
db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', (err) => console.log('Error ' + err));

module.exports = server;
