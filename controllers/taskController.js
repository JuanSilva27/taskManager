let tasks=[{
    id: 1,
    title: "titulo",
    description: "SOY UNA TAREA",
    completed: "true",
    createdAt: "HOY"
  },
  {
    id: 2,
    title: "titulo",
    description: "SOY UNA TAREA",
    completed: "true",
    createdAt: "HOY"
  },

]

module.exports = {
    list : (req, res) =>{
        res.json(tasks)
    },

    createTask : (req,res) =>{
        const {title, description, completed, createdAt} = req.body
        if([title, description, completed, createdAt].includes("")|| !title || !description || completed===undefined || !createdAt){
            return res.status(400).json({
                ok: false,
                msg: 'Todos los campos son obligatorios'
              })
        }

        const newTask = {
            id: tasks.length+1,
            title,
            description,
            completed,
            createdAt
        }

        tasks.push(newTask)
        console.log(req.body)
        res.status(201).json({
            ok:true,
            msg: "Tarea guardada con existo",
            newTask
            })

    },

    updateTask: (req, res) => {
        const id = req.params.id
        
        const task= tasks.find(task => task.id === +id)

        console.log(task)
        if (!task) {
            return res.status(404).json({
                ok: false,
                msg: 'Tarea no encontrada'
            })
        }

        task.title = req.body.title ?? task.title
        task.description = req.body.description ?? task.description
        task.completed = req.body.completed ?? task.completed
        task.createdAt = req.body.createdAt ?? task.createdAt

        res.status(201).json({
            ok:true,
            msg: "Tarea actualizada con exito con existo",
            task
            })
    },

    deleteTask: (req,res) => {
        const id = req.params.id

        const tasksFiltred = tasks.filter( task => task.id != +id)

        if(tasksFiltred === tasks) {
            return res.status(404).json({
                ok: false,
                msg: 'Tarea no encontrada'
            })
        }

        tasks= tasksFiltred

        res.status(201).json({
            ok:true,
            msg: "Tarea eliminada con exito con existo",
            })
        
    }
}