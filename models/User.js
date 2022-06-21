const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
        // validate email with Regex
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },

    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],

    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
    },
    
    {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false
    }
)

// total friend count
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

// create User model
const User = model('User', UserSchema);

// export User model
module.exports = User;
