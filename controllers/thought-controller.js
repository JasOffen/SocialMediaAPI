const { Thought, User, Reaction } = require('../models');

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
            .then(({_id}, dbThoughtData) =>{
                User.findOneAndUpdate({_id: params.id}, {thoughts: _id})
                res.status(200).json(dbThoughtData);
            })
            //.then(dbThoughtData => res.json(dbThoughtData))
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
}

module.exports = thoughtController