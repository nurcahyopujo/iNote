import React from 'react';

import Note from './Note.js';

class ListNotes extends React.Component {
  render() {
    return (
      <div>
        <Note />
        <Note />
        <Note />
      </div>
    );
  }
}

export default ListNotes;
