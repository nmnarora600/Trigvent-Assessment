import React from 'react'
import { useContext } from 'react';
import NoteContext from '../context/Notes/noteContext';

export default function NoteItem(props) {
const note=props.notes;
let context=useContext(NoteContext);
let {deleteNote, changeStatus}=context
const {updateNote}=props
  return (
    <div className=' my-3'>
     <div className="card" >
      <div className="d-flex">
      <div className="card-body col-8">
    <h3 className="card-title">{note.title}</h3>
    <p className="card-text">{note.description}</p>
  </div>
  <div className="card-body d-flex align-items-end flex-column">
    <p className={`card-text ${note.tag==="Pending"?'text-danger':"text-success"}`}><strong>{note.tag}</strong></p>
    <div className=' d-flex justify-content-center align-items-center'>
      {
        (note.tag==="Pending")?<i className="fa-solid fa-square-xmark mx-2 text-danger" onClick={()=>{changeStatus(note); props.showAlert("Status Updated", "success")}} style={{ scale:'130%'}}></i>:
    <i className="fa-solid fa-square-check mx-2 text-success" onClick={()=>{changeStatus(note); props.showAlert("Status Updated", "success")}} style={{ scale:'130%'}}></i>
      }
    <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id);
    props.showAlert("Task Deleted", "success")}}></i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note);props.showAlert("Details Updated", "success")}}></i>
    </div>
   
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
      </div>

</div>
    </div>
  )
}
