const { Thought, User} = require('../models');

const thoughtController = {
    getThoughtbyID({params},res){
        Thought.findOne({ _id: params.id })
            .then(dbThoughtData =>{
                if (!dbThoughtData){
                    res.status(404).json({message: 'No post found'});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch( err =>{
                console.log(err);
                res.status(400).json(err)
            })
    },

    getThoughts(req,res){
        Thought.find({})
            .then(dbThoughtData =>{
                if (!dbThoughtData){
                    res.status(404).json({message: 'No posts found'});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch( err =>{
                console.log(err);
                res.status(400).json(err)
            })
    },

    updateThought({params, body},res){
        Thought.findByIdAndUpdate({_id: params.id}, body)
            .then(dbThoughtData =>{
                if(!dbThoughtData){
                    res.status(404).json({message: 'No user found'});
                    console.log('Not found')
                    return;
                }
                res.json(dbThoughtData);
                console.log(dbThoughtData)
            })
            .catch( err=>{
                console.log(err)
                res.status(400).json(err)
            })
    },

    createThought({params, body}, res){
        Thought.create(body)
            .then(({_id}) =>{
                return User.findOneAndUpdate({_id: params.id}, {$push: {thoughts: _id}}, {new: true})
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({message: 'No user found'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(404).json(err))
    },

    deleteThought({params}, res){
        Thought.findOneAndDelete({_id: params.id})
            .then(dbThoughtData =>{
                if (!dbThoughtData){
                    res.status(404).json({message: 'No post found'});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err))
    },

    addReaction({params, body}, res){
        Thought.findByIdAndUpdate({ _id: params.thoughtid },{ $push: { reaction: body } },{ new: true })
        .then(dbThoughtData =>{
            if (!dbThoughtData){
                res.status(404).json({message: 'No post found'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch( err =>{
            console.log(err);
            res.status(400).json(err)
        })
    }
}

module.exports = thoughtController