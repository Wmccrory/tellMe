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
			callbackURL: '/auth/google/callback'
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
							userEmail: profile.emails,
							name: profile.name
						})
						.save()
						.then(user => done(null, user));
					}
				})
		}
	)
);

//facebook passport authentication
passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebookClientID,
			clientSecret: keys.facebookClientSecret,
			callbackURL: '/auth/facebook/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			User
				.findOne({ facebookId: profile.id })
				.then((existingUser) => {
					console.log(existingUser);
				})
		}
	)
)