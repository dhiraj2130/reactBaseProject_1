import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

export class Notes extends React.Component{
    render(){
        return(
          <div>
            <h3> Notes </h3>
            <AddNote username={this.props.username} addNote={this.props.addNote}/>
              <NotesList notes={this.props.notes}/>
          </div>
        )
    }
};

