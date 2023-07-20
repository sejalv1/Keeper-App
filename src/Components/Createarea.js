import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

 const [note,setnote] = useState({
  title :"",
  content: ""

 });

 const [ifExtend,setExtend] = useState(false);

 function handlechange(event){
    const {name , value} = event.target;

    setnote(prevnote => {
        return {
            ...prevnote,[name]:value
        };
    });
 }

 function formdata(event){
    props.Onadd(note);
    setnote ({
        title: "",
        content:""
    })
    event.preventDefault();
 }
function extend(){
    setExtend(true);
}
 


  return (
    <div>
      <form className = "create-note" onChange={handlechange}>
        {ifExtend ? <input name="title" value={note.title} placeholder="Title"  />: null}
        <textarea onClick = {extend} name="content" value={note.content} placeholder="Take a note..." rows={ifExtend? 3 :1} />
        <Zoom in ={ifExtend}>
        <Fab onClick={formdata}>
        <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
