const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoal = asyncHandler(async(req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
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

      const goal = await Goal.create({
        text: req.body.text,
        // user: req.user.id,
      })
    
      res.status(200).json(goal)
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