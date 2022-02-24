const router = require('express').Router();
const {
    getThoughtbyID,
    createThought,
    deleteThought,
    getThoughts,
    updateThought,
    addReaction,

  } = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getThoughts)
  .post();

router
  .route('/:id')
  .get(getThoughtbyID)
  .post(createThought)
  .put(updateThought)
  .delete(deleteThought);

router 
  .route('/:thoughtid/reactions')
  .get()
  .post(addReaction)
  .put()
  .delete()

router
  .route('/:thoughtid/:reactsid')
  .get()
  .post()
  .put()
  .delete()
  
module.exports = router;