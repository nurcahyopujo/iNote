import React, { PropTypes } from 'react';

const Note = ({ onClick, title, content }) => (
  <div
    className="well"
    onClick={onClick}
  >
    <h4>{title}</h4>
    <p>{content}</p>
  </div>
);

Note.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Note;
