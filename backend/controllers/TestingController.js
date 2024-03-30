const TaskModel = require('../models/TestingModels')

module.exports.getTasks = async (req, res) => {
    const tasks = await TaskModel.find()
    res.send(tasks)
}

module.exports.saveTasks = async (req, res) => {
    const { task } = req.body
    TaskModel.create({ task })
        .then((data) => {
            console.log('Saved ');
            res.status(201).send(data)
        }).catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Margaya saala" })
        })
}


module.exports.updateTasks = (req, res) => {
    const { id } = req.params
    const { task } = req.body
    TaskModel.findByIdAndUpdate(id, { task })
        .then(() => res.send("Update success"))
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Margaya saala" })
        })
}

module.exports.deleteTasks = (req, res) => {
    const { id } = req.params
    const { task } = req.body
    TaskModel.findByIdAndDelete(id)
        .then(() => res.send("Deleted success"))
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Margaya saala" })
        })
}

