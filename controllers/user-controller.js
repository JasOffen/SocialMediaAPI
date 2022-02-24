const { User } = require('../models');

const userController = {
    getAllUsers(req,res){
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                res.status(400).json(err)
            })
    },
    getUserbyID({params},res){
        User.findOne({ _id: params.id })
            .then(dbUserData =>{
                if (!dbUserData){
                    res.status(404).json({message: 'No user found'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch( err =>{
                console.log(err);
                res.status(400).json(err)
            })
    },

    createUser({body}, res){
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(404).json(err))
    },
    
    updateUser({params, body},res){
        User.findByIdAndUpdate({_id: params.id}, body)
            .then(dbUserData =>{
                if(!dbUserData){
                    res.status(404).json({message: 'No user found'});
                    console.log('Not found')
                    return;
                }
                res.json(dbUserData);
                console.log(dbUserData)
            })
            .catch( err=>{
                console.log(err)
                res.status(400).json(err)
            })
    }

}

module.exports = userController