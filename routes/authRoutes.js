//authentication routes//

//dependencies
const passport = require('passport');

////////////////////

module.exports = (app) => {

	//google authentication

	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile', 'email']
	}));

	app.get('/auth/google/callback', passport.authenticate('google'));



	//facebook authentication

	app.get('/auth/facebook', passport.authenticate('facebook', {
		scope: ['public_profile', 'email']
	}));

	app.get('/auth/facebook/callback', passport.authenticate('facebook', {successRedirect: '/', failureRedirect: '/failed'}));

	//user profile
	
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};