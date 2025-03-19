const express = require ('express')
const router = express.Router()

const {list, create, update} = require("../controller/taskController")

router
    .route("/")
        .get(list)
        .post(create)
 router       
    .route("/:id")
        .put(update)

module.exports = router;