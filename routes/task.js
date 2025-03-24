const express = require ('express')
const router = express.Router()

const {list, createTask, updateTask, deleteTask, detail} = require("../controllers/taskController")

router
    .route("/")
        .get(list)
        .post(createTask)
 router       
    .route("/:id")
        .get(detail)
        .put(updateTask)
        .delete( deleteTask)

module.exports = router;