let tasks=[1,2,3,4,5]

module.exports = {
    list : (req, res) =>{
        res.json(tasks)
    },

    create : (req,res) =>{
        const {title, description, completed, createdAt} = req.body
        const newTask = {
            id: tasks.length+1,
            title,
            description,
            completed,
            createdAt
        }

        if(!newTask){
            res.status(err.status || 500).json({
                ok : false,
                msg : err.message ? err.message : 'Upss, hubo un error!'
              })
        }

        tasks.push(newTask)
        console.log(req.body)
        res.status(201).json({
            ok:true,
            msg: "Tarea guardada con existo",
            newTask
            })
    }


}