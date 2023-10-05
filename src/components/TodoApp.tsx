import { useState } from "react"
import { ListaTareas } from "./ListasTareas"
export const TodoApp = () => {

   const[nuevaTarea, setNuevaTarea] = useState<string>('')
  const [listasTareas, setListasTareas] = useState<string[]>([])
   const handleAddTask = () =>{
    if(nuevaTarea.trim() === '') return
    setListasTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
    setNuevaTarea('')
   } 

   const handleBorrarTarea = (index:number) => {
      setListasTareas(tareas => tareas.filter ((_,i) => i !== index))
   }

  return (
    <div>
        <h1>Listas de Tareas</h1>
        <div>
          <input 
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva Tarea"
          />
          <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
    <ListaTareas  listaTareas={listasTareas} borrarTareas={handleBorrarTarea}></ListaTareas>
    </div>
  )
}