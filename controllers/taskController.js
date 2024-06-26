const Task = require('../models/task');

exports.getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.findAll();
        res.status(200).json({
            message: 'getAllTasks succesfully', 
            tasks: tasks,
    });
    }catch (error){
        res.status(500).json({ error: error.message });
    }
};