import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from './Createarea';



function App(){
  const[notes, setNotes] = useState([]);


  function addnote(note){
   setNotes(prevNotes => {
  return [...prevNotes, note];
   });
  }

  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((noteItem, index) =>{
       return index !== id;
      })
    })
  }

  return(
  <>
    <Header />
    <CreateArea 
      Onadd = {addnote}
    />
    {notes.map((noteItem, index) => {
    return <Note 
        key = {index}
        id = {index}  
        title = {noteItem.title}
        content = {noteItem.content}
        onDelete = {deleteNote}
    />
    })}
    
    <Footer />
    
    </>
    );
}

export default App;