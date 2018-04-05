//prod.js - production keys

module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

	//facebook info
	facebookClientID: FACEBOOK_CLIENT_ID,
	facebookClientSecret: FACEBOOK_CLIENT_SECRET,

	//mongo info
	mongoURI: process.env.MONGO_URI,

	//cookie info
	cookieKey: process.env.COOKIE_KEY
}