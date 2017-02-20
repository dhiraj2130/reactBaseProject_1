var React = require('react');
var NotesList = require('./NotesList');
var AddNote = require('./AddNote');

var Notes = React.createClass({
    render:function(){
        return(
            <div> 
             <h3> Notes </h3>
            <AddNote username={this.props.username} addNote={this.props.addNote}/>
                <NotesList notes={this.props.notes}/>

            </div>
        )

    }
});

module.exports = Notes;