const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = ('../../controllers/thoughts-controller');

// direct to /api/thoughts
router.route('/').get(getAllThoughts);

// directs to /api/thoughts/:id
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts);

// directs to /api/thoughts/:userId
router.route('/:userId').post(createThoughts);

// directs to /api/thoughts/:thoughtId/reactions
router.route('/thoughtId/reactions').post(addReaction);

// directs to /api/thoughts/:thoughtId/reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;

