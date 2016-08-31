import React from 'react';
import { connect } from 'react-redux';
import { newNote } from '../actions';

let NewNote = ({ dispatch }) => {
  let inputTitle;
  let inputContent;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!inputTitle.value.trim()) {
          return
        }

        dispatch(newNote(inputTitle.value, inputContent.value));
        inputTitle.value = ''
        inputContent.value = ''
      }}>
        <h3>New Note</h3><br />
        <label>Title</label>
        <input type="text" className="form-control" ref={node => {
          inputTitle = node
        }} /><br />
        <label>Notes</label>
        <textarea className="form-control" rows="10" ref={node => {
          inputContent = node
        }} >
        </textarea><br />
        <button className="btn btn-block btn-primary">Save</button>
      </form>
    </div>
  )
}
NewNote = connect()(NewNote)

export default NewNote
