const router = require('express').Router();
const {
    getThoughtbyID,
    createThought,
    deleteThought,
    getThoughts,
    updateThought,
  } = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/pizzas
router
  .route('/')
  .get(getThoughts)
  .post(createThought);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
  .route('/:id')
  .get(getThoughtbyID)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;