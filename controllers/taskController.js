let tasks=[{
    id: 8,
    title: "titulo8",
    description: "SOY UNA TAREA",
    completed: true,
    createdAt: "HOY"
  },
  {
    id: 5,
    title: "titulo5",
    description: "SOY UNA TAREA",
    completed: true,
    createdAt: "HOY"
  },

]

module.exports = {
    list : (req, res) =>{
        res.status(201).json({
            ok:true,
            msg:"Lista de tareas",
            tasks,
        })
    },

    createTask : (req,res) =>{
        const {title, description, completed, createdAt} = req.body
        if([title, description, completed, createdAt].includes("")|| !title || !description || completed===undefined || !createdAt){
            return res.status(400).json({
                ok: false,
                msg: 'Todos los campos son obligatorios'
              })
        }

        let highTaskId = tasks.length > 0 ? Math.max(...tasks.map(task=> task.id)) : 0

        let newTask = {
            id: highTaskId+1,
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
            task: newTask
            })

    },

    updateTask: (req, res) => {
        const id = req.params.id
        const body = req.body

        const task= tasks.find(task => task.id === +id)

        console.log(task)
        if (!task) {
            return res.status(404).json({
                ok: false,
                msg: 'Tarea no encontrada'
            })
        }

        task.title = body.title && body.title.trim() !== "" ? body.title : task.title
        task.description = body.description  && body.description.trim() !== "" ? body.title : task.description
        task.completed = body.completed !== undefined ? body.completed : task.completed
        task.createdAt = body.createdAt && body.createdAt.trim() !== "" ? body.createdAt : task.createdAt

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