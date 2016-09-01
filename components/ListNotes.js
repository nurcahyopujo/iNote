import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import Note from './Note.js';

// class ListNotes extends React.Component {
//   render() {
//     return (
//       <div>
//         <Note />
//         <Note />
//         <Note />
//       </div>
//     );
//   }
// }

const ListNotes = ({ notes, onNoteClick }) => (
  <div>
    {notes.map(note =>
      <Note
        key={note.id}
        {...note}
        onClick={() => onNoteClick(note.id)}
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
  onNoteClick: PropTypes.func.isRequired
}


export default ListNotes;
