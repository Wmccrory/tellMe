const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    facebookProfile: Schema.Types.Mixed,
    userEmail: Schema.Types.Mixed,
    name: Schema.Types.Mixed,
    credits: {type: Number, default: 0}
});

mongoose.model('User', userSchema);