import { Button } from './Button';
import { useForm } from '../hooks/useForm';
import useTasks from '../hooks/useTasks';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const FormTask = () => {
    const { storeTask, task, getTask } = useTasks();
    const { formValues, handleInputChange, setFormValues } = useForm(
        {
            title: "",
            description: "",
            createdAt: "",
            completed: false,
        }
    );
    const { id } = useParams();
    const [loading, setLoading] = useState(true); // Estado para controlar la carga de datos

    useEffect(() => {
        if (id) {
            // Si hay un id, estamos editando, así que intentamos cargar la tarea
            getTask(id).finally(() => setLoading(false)); // Actualizamos el estado de carga
        } else {
            setLoading(false); // Si no hay id, no necesitamos hacer nada, ya estamos listos para crear
        }
    }, [id, getTask]);

    useEffect(() => {
        if (task && Object.keys(task).length > 0) {
            // Si hay datos de la tarea, los ponemos en el formulario
            setFormValues({
                title: task.title || '',
                description: task.description || '',
                createdAt: task.createdAt?.split("T")[0] || '',
                completed: task.completed || false,
            });
        }
    }, [task, setFormValues]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, description, createdAt, completed } = formValues;

        if ([title, description, createdAt].includes("") || completed === undefined) {
            return; // Si falta información, no enviamos el formulario
        }

        storeTask({
            id: id || null, // Si hay id, lo mandamos para actualizar; si no, será para crear
            title,
            description,
            createdAt,
            completed,
        });
    };

    if (loading) {
        return <div>Loading...</div>; // Mostrar carga mientras obtenemos la tarea
    }

    return (
        <form
            className="bg-white py-5 px-5 md:w-4/4 lg:w-3/4 rounded-md border-2"
            onSubmit={handleSubmit}
        >
            <div className="mb-5">
                <label
                    htmlFor="title"
                    className="text-gray-700 uppercase font-bold text-sm"
                >
                    Título de la tarea
                </label>

                <input
                    id="title"
                    type="text"
                    placeholder="Título de la tarea"
                    className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={formValues.title}
                    name="title"
                    onChange={handleInputChange}
                />
            </div>

            <div className="my-5">
                <label
                    htmlFor="description"
                    className="text-gray-700 uppercase font-bold text-sm"
                >
                    Descripción
                </label>

                <input
                    id="description"
                    type="text"
                    placeholder="Descripción de la tarea"
                    className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={formValues.description}
                    name="description"
                    onChange={handleInputChange}
                />
            </div>

            <div className="my-5">
                <label
                    htmlFor="createdAt"
                    className="text-gray-700 uppercase font-bold text-sm"
                >
                    Fecha de creación
                </label>

                <input
                    id="createdAt"
                    type="date"
                    className="border w-full p-2 mt-2 rounded-md"
                    value={formValues.createdAt}
                    name="createdAt"
                    onChange={handleInputChange}
                />
            </div>

            <div className="my-5 flex justify-between items-center">
                <label
                    htmlFor="completed"
                    className="text-gray-700 uppercase font-bold text-sm"
                >
                    Tarea completada:
                </label>

                <input
                    id="completed"
                    type="checkbox"
                    className="w-5 h-5 accent-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200 p-2 rounded-md"
                    name="completed"
                    checked={formValues.completed}
                    onChange={handleInputChange}
                />
            </div>

            <Button text={id ? "Actualizar" : "Guardar"} />
        </form>
    );
};