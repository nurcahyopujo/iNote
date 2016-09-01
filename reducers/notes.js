const note = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return {
          id: action.id,
          title: action.title,
          content: action.content,
          update_at: new Date(),
          create_at: new Date()
        };
    case 'EDIT_NOTE':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        title: state.title,
        content: state.content
      });
    default:
      return state;
  }
};

const notes = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return  [
        ...state,
        note(undefined, action)
      ];
    case 'EDIT_NOTE':
      return state.map(t =>
        note(t, action)
      );
    case 'DELETE_NOTE':
      return state.filter(note =>
          note.id !== action.id
        )
    default:
      return state;
  }
};

export default notes;
