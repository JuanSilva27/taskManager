let tasks=[1,2,3,4,5]

module.exports = {
    list : (req, res) =>{
        res.json(tasks)
    }
}