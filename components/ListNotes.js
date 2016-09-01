import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import Note from './Note.js';

const ListNotes = ({ notes, onNoteDelete, onNoteEdit }) => (
  <div>
    {notes.map(note =>
      <Note
        key={note.id}
        {...note}
        onDelete={() => onNoteDelete(note.id)}
        onEdit={() => onNoteEdit(note.id, note.title, note.content)}
      />
    )}
  </div>
);

ListNotes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onNoteDelete: PropTypes.func.isRequired,
  onNoteEdit: PropTypes.func.isRequired
}


export default ListNotes;
