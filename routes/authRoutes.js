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
};