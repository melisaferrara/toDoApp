import ToDo from "./ToDo"



const ToDoList = ({ data, setData }) => {

    const handleClickDelete = (id) => {
        setData(prev => prev.filter(task => task.id != id))
    }

    return <div className="p-4 flex justify-center gap-2 font-semibold text-base flex-wrap">
        {data.map((task, i) => {
            return <ToDo key={i} task={task} handleClickDelete={handleClickDelete} />
        })}
    </div>


}
export default ToDoList


