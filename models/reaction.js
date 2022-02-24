const {Schema, model} = require('mongoose')

const reaction = new Schema({
    reactionId: {

    },
    reactionBody:{
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1
    },
    username:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date, 
        default: Date.now
    }
})

module.exports = reaction