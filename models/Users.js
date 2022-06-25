const { Schema, model } = require('mongoose');

const UsersSchema = new Schema(
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
        ref: 'Thoughts'
    }],

    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
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
UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

// create User model
const Users = model('Users', UsersSchema);

// export User model
module.exports = Users;
