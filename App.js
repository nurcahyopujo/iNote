import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <b>Coba</b>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
