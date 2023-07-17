import { useEffect, useState } from "react"
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';
import TagsMenu from "./TagsMenu";

const Form = () => {
    const [uniqueTags, setUniqueTags] = useState(["All"]);
    const [data, setData] = useState([])
    const [taskData, setTaskData] = useState({
        tasks: "",
        priority: "Low",
        date: "",
        tag: "",
    });

    const handleChange = (event) => {

        setTaskData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setData((prevData) => [...prevData, { ...taskData, id: uuidv4(), isShown: true }]);
        if (!uniqueTags.includes(taskData.tag)) {
            setUniqueTags(prev => [...prev, taskData.tag])
        }


    };

    const handleClickOrder = () => {
        setData(prev => [...prev].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
    }


    useEffect(() => {
        const tags = data.map((task) => task.tag)
        const buttonTags = new Set([...tags])
        setUniqueTags(["All", ...buttonTags])
    }, [data])

    return (
        <>
            <div className="p-8 font-bold text-2xl text-white">
                <h1>ToDo App</h1>
            </div>
            <form className="w-full p-6 flex justify-center flex-col items-center px-20 border border-white rounded-lg font-bold" onSubmit={handleSubmit}>
                <div className="flex gap-80">
                    <div className="flex flex-col items-center gap-2 text-white">
                        <h2>Insert toDo:</h2>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="tasks" onChange={handleChange} />
                        <button className="bg-zinc-300 hover:bg-zinc-400 text-black font-bold py-2 px-4 border-b-4 border-zinc-700 hover:border-zinc-600 rounded">Create</button>
                    </div>
                    <div className="flex flex-col gap-2 text-white">
                        <p>Priority:</p>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="priority" id="pr" onChange={handleChange}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        <p>Deadline:</p>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" name="date" onChange={handleChange} />
                        <p>Tag:</p>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="tag" onChange={handleChange} />
                    </div>
                </div>

            </form>
            <div className="p-4">
                <button className="bg-zinc-300 hover:bg-zinc-400 text-black font-bold py-2 px-4 border-b-4 border-zinc-700 hover:border-zinc-600 rounded" onClick={handleClickOrder}>Order</button>
            </div>

            <div className="flex gap-4 justify-center">
                {
                    uniqueTags.map((tag, i) => {
                        return <TagsMenu tag={tag} key={i} setData={setData} />
                    })
                }
            </div>

            <ToDoList data={data} setData={setData} />
        </>


    );
}

export default Form