//passport user authentication

//dependencies
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const mongoose = require('mongoose');
const keys = require('./../config/keys');

//mongoDB user import
const User = mongoose.model('User');

passport.serializeUser((user, done) => {
	done(null, user.id);
})

passport.deserializeUser((id, done) => {
	User
		.findById(id)
		.then(user => {
			done(null, user);
		});
});

//google passport authentication
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		}, 
		(accessToken, refreshToken, profile, done) => {
			//Determine if user already has account
			User
				.findOne({ googleId: profile.id })
				.then((existingUser) => {
					if (existingUser) {
						//login to existing account
						done(null, existingUser);
					}
					else {
						//create new account
						new User({
							googleId: profile.id,
							userEmail: profile.emails[0].value,
							name: {"firstName" : profile.name.givenName, "lastName" : profile.name.familyName}
						})
						.save()
						.then(user => done(null, user));
					}
				})
		}
	)
);

//facebook passport authentication (Not complete yet because facebook is a pain in the ass to test on);
passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebookClientID,
			clientSecret: keys.facebookClientSecret,
			callbackURL: '/auth/facebook/callback',
			proxy: true
		},
		(accessToken, refreshToken, profile, done) => {
			User
				.findOne({ facebookId: profile.id })
				.then((existingUser) => {
					if (existingUser) {
						//login to existing account
						done(null, existingUser);
					}
					else {
						//create new account
						new User({
							facebookId: profile.id,
							name: profile._json.name
						})
						.save()
						.then(user => done(null, user));
					}
				})
		}
	)
)