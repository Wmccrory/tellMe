//root file from which all other files spring//

//dependencies
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const keys = require('./config/keys');
require('./models/User.js');
require('./services/passport');

//turning on mongoose
mongoose.connect(keys.mongoURI);

//turning on app
const app = express();

//setting up bodyparser
app.use(bodyParser.json());

//setting up cookies
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,	//Formula for turning 30 days into milliseconds
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

//routes
require('./routes/authRoutes')(app);	//user authentication
require('./routes/billingRoutes')(app);	//billing routes

//starting up server
app.listen(PORT, () => {
	console.log(`Now listening on port ${PORT}`);
});