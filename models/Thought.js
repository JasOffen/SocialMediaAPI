const { Schema, model } = require('mongoose')
//const reactionSchema = require('./Reaction')

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
 
const thoughtSchema = new Schema({
     thoughtText: {
          type: String,
          required: true,
          maxlength: 280,
          minlength: 1
     },
     createdAt: {
          type: Date,
          default: Date.now
     },
     username: {
          type: String,
          required: true,
     },
     reaction: [
          reactionSchema
     ]
})
const Thought = model('Thought', thoughtSchema);
module.exports = Thought