const router = require('express').Router();
const {

  } = require('../../controllers/user-controller');

// Set up GET all and POST at /api/pizzas
router
  .route('/')
  .get()
  .post()
 // .put(updateUser);
// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
  .route('/:id')
  .get()
  .put()
  .delete();

module.exports = router;