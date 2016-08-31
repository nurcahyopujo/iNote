import React from 'react';

class NewNote extends React.Component {
  render() {
    return (
      <div>
        <h3>New Note</h3><br />
        <label>Title</label>
        <input type="text" className="form-control" /><br />
        <label>Notes</label>
        <textarea className="form-control" rows="10">
        </textarea><br />
        <button className="btn btn-block btn-primary">Save</button>
      </div>
    );
  }
}

export default NewNote;
