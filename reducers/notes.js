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
      ]
    default:
      return state;
  }
};

export default notes;
