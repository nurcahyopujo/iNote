import React from 'react';
import ReactDOM from 'react-dom';

import NewNote from './components/NewNote.js';
import ListNotes from './components/ListNotes.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-4">
          <NewNote />
        </div>
        <div className="col-md-8">
          <h1>List Notes</h1>
          <ListNotes />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
