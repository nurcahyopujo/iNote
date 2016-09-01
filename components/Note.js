import React, { Component, PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { editNote } from '../actions';

// const Note = ({ onEdit, onDelete, title, content }) => (
//   <div className="well">
//     <h4>{title}</h4>
//     <ReactMarkdown source={content} />
//     <div className="text-right">
//       <button className="btn btn-primary" onClick={onEdit}><i className="glyphicon glyphicon-pencil" /></button>&nbsp;
//       <button className="btn btn-danger" onClick={onDelete}><i className="glyphicon glyphicon-trash" /></button>
//     </div>
//   </div>
// );

class Note extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }

  handleEditClick() {
    this.setState({ editing: true })
  }

  handleCancelClick(e) {
    e.preventDefault();
    this.setState({ editing: false });
  }

  handleEditSave(e) {
    e.preventDefault();
    const { onEdit, onDelete, title, content } = this.props;

    this.setState({ editing: false });
    onEdit(1, 2, 3);

  }

  render() {
    const { onEdit, onDelete, id, title, content } = this.props;

    let element;

    if (this.state.editing) {
      let inputTitle;
      let inputContent;
      element = (
        <form onSubmit={e => {
          e.preventDefault()
          if (!inputTitle.value.trim()) {
            return
          }
          // console.log(this.props.dispatch);
          // dispatch(editNote(id, inputTitle.value, inputContent.value));
          this.setState({ editing: false });
        }}>
          <label>Title</label>
          <input type="text" className="form-control" defaultValue={title} ref={node => {
            inputTitle = node
          }} /><br />
          <label>Notes</label>
          <textarea className="form-control" rows="10" ref={node => {
            inputContent = node
          }} >{content}
          </textarea><br />
          <button className="btn btn-primary">Save</button>&nbsp;
          <button className="btn btn-danger" onClick={this.handleCancelClick.bind(this)}>Cancel</button>
        </form>
      )
    } else {
      element = (
        <div>
          <h4>{title}</h4>
          <ReactMarkdown source={content} />
          <div className="text-right">
            <button className="btn btn-primary" onClick={this.handleEditClick.bind(this)}><i className="glyphicon glyphicon-pencil" /></button>&nbsp;
            <button className="btn btn-danger" onClick={onDelete}><i className="glyphicon glyphicon-trash" /></button>
          </div>
        </div>
      )
    }

    return (
      <div className="well">
        {element}
      </div>
    );

  }
}

Note.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Note;
