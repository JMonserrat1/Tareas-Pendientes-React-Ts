type ListasTareas = {
    tarea:string
    borrarTarea: () => void
}

export const Tarea = ({tarea, borrarTarea}: ListasTareas) => {
  return (
    <div className="task">
        <span>{tarea}</span>
        <button onClick={borrarTarea}>Borrar</button>
    </div>
  )
}