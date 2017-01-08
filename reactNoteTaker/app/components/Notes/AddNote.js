/**
 * Created by dhiraj on 08/01/2017.
 */
var React=require('react');

var AddNote = React.createClass({
setRef: function(ref){
    this.note = ref;
},
    handleSubmit: function(){
    var newNote = this.note.value;
    this.note.value ='';
    this.props.addNote(newNote);
    },
    render:function(){
    return (
        <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" ref={this.setRef}/>
      <span className="input-btn-group">
              <button className="btn btn-default" type="button" onClick={this.handleSubmit}>submit</button>
            </span>
        </div>
    )
}
});

module.exports=AddNote;