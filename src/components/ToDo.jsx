import { useState } from "react"


const ToDo = ({ task, handleClickDelete }) => {
    const { isShown } = task
    const [crossOut, setCrossOut] = useState(false)

    const handleClickBlanck = () => {
        setCrossOut(prevCrossOut => !prevCrossOut);
    }

    const backgroundColorCard = task.priority === "Low" ? `bg-yellow-100` : task.priority === "Medium" ? `bg-orange-200` : `bg-red-300`

    return (
        <>
            {

                isShown && <div className={`flex flex-col gap-2 w-96 h-70  p-6 border rounded-lg transform hover:scale-105 transition-transform duration-300 ${backgroundColorCard}`}>
                    <h2 className={`text-2xl ${crossOut && `line-through italic`}`}>{task.tasks}</h2>
                    <p className={`text-gray-500 ${crossOut && `line-through italic`}`}>{`#${task.tag}`}</p>
                    <p className={`${crossOut && `line-through italic`}`}>Priority: {task.priority}</p>
                    <p className={`${crossOut && `line-through italic`}`}>Finish date: {task.date}</p>
                    <div className="flex gap-5 justify-center ">
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => handleClickDelete(task.id)}>Delete</button>
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleClickBlanck}>Done</button>
                    </div>
                </div>
            }
        </>

    )
}

export default ToDo

