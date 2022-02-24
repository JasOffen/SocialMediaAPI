const {Schema, model} = require('mongoose')

const Reaction = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => Types.ObjectId
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

module.exports = Reaction