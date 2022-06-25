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

// points to /api/thoughts
router.route('/').get(getAllThoughts);

// points to /api/thoughts/:id
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts);

// points to /api/thoughts/:userId
router.route('/:userId').post(createThoughts);

// points to /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// points to /api/thoughts/:thoughtId/reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;

