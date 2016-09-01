import { connect } from 'react-redux'
import { deleteNote, editNote } from '../actions'
import ListNotes from '../components/ListNotes'

const mapStateToProps = (state) => {
  return {
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
    notes: state.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNoteDelete: (id) => {
      dispatch(deleteNote(id));
    },
    onNoteEdit: (id, title, content) => {
      // dispatch(editNote(id, title, content));
      //
      alert('coba');
      console.log(id, title, content);
    }
  }
}

const VisibleNotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListNotes)

export default VisibleNotes
