let nextNoteId = 0
export const newNote = (title, content) => {
  return {
    type: 'NEW_NOTE',
    id: nextNoteId++,
    title,
    content
  }
}
