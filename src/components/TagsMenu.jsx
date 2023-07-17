
const TagsMenu = ({ tag, setData}) => {
    
    const handleClickHashtag = () => {
        setData(prev => prev.map(task => {
            if(tag === 'All') {
                task.isShown = true
                return task
            }
            if(task.tag == tag) {
                task.isShown = true
            }else{
                task.isShown = false
            }
            
            return task
        }))  
        
       }
   

   

    return (
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleClickHashtag}>#{tag}</button>
    );
};

export default TagsMenu;
