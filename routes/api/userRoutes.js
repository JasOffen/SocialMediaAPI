const router = require('express').Router();
const {
    getAllUsers,
    getUserbyID,
    createUser,
    updateUser,
    deleteUser,
    addFriend
//    updateUser
  } = require('../../controllers/user-controller');

// Set up GET all and POST at /api/pizzas
router
  .route('/')
  .get(getAllUsers)
  .post(createUser)
 // .put(updateUser);
// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
  .route('/:id')
  .get(getUserbyID)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:id/friends/:friendid')
  .post(addFriend)

module.exports = router;