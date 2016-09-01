import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import ListNotes from '../components/ListNotes'

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// }

const mapStateToProps = (state) => {
  return {
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
    notes: state.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNoteClick: (id) => {
      // dispatch(toggleTodo(id))
      alert('coba');
    }
  }
}

const VisibleNotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListNotes)

export default VisibleNotes
