const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoal = asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'Get goal'});
})

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoal =  asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        // creating a middleware func to handle the error
        throw new Error('Please add a text field')
      }

    res.status(200).json({ message: 'Set goal'});
})


// @desc    update goals
// @route   UPDATE /api/goals/:id
// @access  Private
const updateGoal = asyncHandler (async(req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`});
})


// @desc    delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal =  asyncHandler (async(req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`});
})

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}