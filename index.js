//root file from which all other files spring//

//dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('./services/passport');

//routes

require('./routes/authRoutes')(app);	//authentication

//starting up server
app.listen(PORT, () => {
	console.log(`Now listening on port ${PORT}`);
});

//notes
//
//* authentication routes are in routers/authRoutes.js
//* passport app (for authenticating) in services/passport.js
