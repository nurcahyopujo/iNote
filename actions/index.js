let nextNoteId = 0
export const newNote = (title, content) => {
  return {
    type: 'NEW_NOTE',
    id: nextNoteId++,
    title,
    content
  }
}

export const editNote = (id, title, content) => {
  return {
    type: 'EDIT_NOTE',
    id,
    title,
    content
  }
}

export const deleteNote = (id) => {
  return {
    type: 'DELETE_NOTE',
    id,
  }
}
