import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import noteApp from './reducers'

import NewNote from './components/NewNote.js';
import VisibleNotes from './containers/visibleNotes.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-4">
          <NewNote />
        </div>
        <div className="col-md-8">
          <h1>List Notes</h1>
          <VisibleNotes />
        </div>
      </div>
    );
  }
}

let store = createStore(noteApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
