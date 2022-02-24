const { Schema, model } = require('mongoose')
//const reactionSchema = require('./reaction')

const reactionSchema = new Schema({
    reactionText: {
        type: String,
        required: true,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    }
})
const Reaction = model('Reaction', reactionSchema);
module.exports = Reaction