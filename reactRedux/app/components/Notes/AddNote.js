import React from 'react';

export class AddNote extends React.Component {

  constructor() {
    super();
  }

  setRef(ref) {
    this.note = ref;
  };

  handleSubmit() {
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote);
  };

  render() {
    return (
      < div
        className="input-group">
        < input
          type="text"
          className="form-control"
          placeholder="Add New Note"
          ref={this.setRef
          }
        />
        < span
          className='input-btn-group'>
      < button
        className="btn btn-default"
        type="button"
        onClick={this.handleSubmit
        }>
    submit </button></span></div>
    )
  }
}


