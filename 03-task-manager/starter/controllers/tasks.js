
const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper (async (req,res) => {
    const tasks = await Task.find({})
    // res.status(200).json({tasks})
    res.status(200).json({tasks, amount:tasks.length})
  }); 

const createTasks = asyncWrapper(async (req,res) => {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }
);

const getTasksByID = asyncWrapper(async (req,res, next) => {
   const {id:taskID} = req.params
   const task = await Task.findOne({_id:taskID});   
   if(!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404))  
    } 
});

const deleteTasks = asyncWrapper(async (req,res) => {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task) {
            return next(createCustomError(`No task with id: ${taskID}`, 404)) 
        }
        res.status(200).json({task})
    }
);

const updateTasks = asyncWrapper( async (req,res) => {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body, 
            {new: true, runValidators: true})
            if(!task) {
                return next(createCustomError(`No task with id: ${taskID}`, 404))  
            }
            res.status(200).json({task})
    }
)

module.exports = {
    getAllTasks,
    createTasks,
    getTasksByID, 
    updateTasks,
    deleteTasks
}