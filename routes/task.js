const express = require ('express')
const router = express.Router()

const {list, createTask, updateTask, deleteTask} = require("../controllers/taskController")

router
    .route("/")
        .get(list)
        .post(createTask)
 router       
    .route("/:id")
        .put(updateTask)
        .delete( deleteTask)

module.exports = router;