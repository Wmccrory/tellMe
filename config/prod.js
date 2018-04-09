//prod.js - production keys

module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

	//facebook info
	facebookClientID: process.env.FACEBOOK_CLIENT_ID,
	facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,

	//mongo info
	mongoURI: process.env.MONGO_URI,

	//cookie info
	cookieKey: process.env.COOKIE_KEY,

	//stripe info
	stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
	stripeSecretKey: process.env.STRIPE_SECRET_KEY,

	//sendgrid info
	sendGridKey: process.env.SEND_GRID_KEY,

	//domain info
	redirectDomain: process.env.REDIRECT_DOMAIN
}