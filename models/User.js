const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    facebookProfile: Schema.Types.Mixed,
    userEmail: Schema.Types.Mixed,
    name: Schema.Types.Mixed
});

mongoose.model('User', userSchema);