const express = require('express');
const router = express.Router();
const { getGoal, setGoal,  updateGoal, deleteGoal} = require('../controllers/goalController')

// Routes

router.route('/').get(getGoal).post(setGoal)

router.route('/:id').delete(deleteGoal).put(updateGoal)
// router.get('/',getGoal),
// router.post('/',setGoal),
// router.put('/:id',updateGoal),
// router.delete('/:id ',deleteGoal),

module.exports = router;