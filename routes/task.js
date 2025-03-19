const express = require ('express')
const router = express.Router()

const {list, create} = require("../controller/taskController")

router
    .route("/")
        .get(list)
        .post(create)


module.exports = router;