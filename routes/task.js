const express = require ('express')
const router = express.Router()

const {list} = require("../controller/taskController")

router
    .route("/")
        .get(list)


module.exports = router;