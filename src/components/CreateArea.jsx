import React, { useState } from 'react';

function CreateArea(props){

    const [note, setNote] = useState({
        title:'',
        content:''
    })

    function handleChange(e){
        const {name, value} = e.target;
        setNote(prevNote => ({...prevNote, [name]:value}))
        
    }

    function submitNote(e){
        if(note.title.length===0 || note.content.length ===0){
            console.log("Enter something");
        } else{
            
                    props.onAdd(note)
                    setNote({
                        title:'',
                        content:''
                    })

        }

        e.preventDefault()
    }

    return(
        <div>
            <form>
                <input 
                value={note.title}
                onChange={handleChange} 
                placeholder="Enter title" 
                name="title"

                />
                <textarea 
                value={note.content}
                onChange={handleChange} 
                placeholder="Enter content" 
                name="content"
                />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;