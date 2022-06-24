// require express
const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
} = require('../../controllers/users-controller');

// points to /api/users
router.route('/').get(getAllUsers).post(createUsers);

// points to /api/users/:id
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

// points to /api/users/:userId/friends/:friendId
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

// export router
module.exports = router;

