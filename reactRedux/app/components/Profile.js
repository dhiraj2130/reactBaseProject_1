
var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');
var helper = require('../utils/helper');

var Profile = React.createClass({

    getInitialState : function(){
        return {
            notes:[1,2,3],
            bio:{},
            repos :[]
        }
    },
    componentDidMount : function(){
        // helper.getGitHubInfo(this.props.params.username)
        //     .then(function(data){
        //         this.setState({
        //             bio:data.bio,
        //             repos:data.repos
        //         })
        //     }.bind(this))
    },
    componentWillUnmount : function(){
        this.unbind('notes');
    },
    handleAddNote: function(newNote){
        //this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);

        //this.state.notes = [...this.state.notes,newNote]; this will not work
        this.setState({
            notes:[...this.state.notes,newNote],
        })

    },
    render:function(){


        return (
            <div className="row">
                <div className="col-md-6">
                    <Notes
                        notes={this.state.notes}
                        addNote={this.handleAddNote}/>
                </div>
            </div>
        )
    }
})
module.exports = Profile;