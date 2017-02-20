
var React = require('react');
var Router = require('react-router');
var Notes = require('./Notes/Notes');
var helper = require('../utils/helper');

import Bio from './Bio/Bio';

import { store } from '../store';


//
// store.subscribe(() =>{
//     "use strict";
//     console.log("store change",store.getState())
// })
//
// store.dispatch({type:"INC",payload : 1});

var Profile = React.createClass({

    getInitialState : function(){
        return {
            notes:['note1','note2','note3'],
            bio:{
                name:'dhiraj',
                address:'sydney'
            },
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
    handleChangeAdddress : function(newAddress){
        this.setState({
            bio: Object.assign({}, this.state.bio, {address:newAddress}),
        })
    },
    handleAddNote: function(newNote){
        //this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);

        //this.state.notes = [...this.state.notes,newNote]; this will not work
        this.setState({
            notes:[...this.state.notes, newNote],
        })

    },
    render:function(){


        return (
            <div className="row">
                <div className="col-md-6">
                    <Bio
                        name={this.state.bio.name}
                        address={this.state.bio.address}
                        changeAddress={this.handleChangeAdddress}
                    />
                </div>

                <div className="col-md-6">
                    <Notes
                        notes={this.state.notes}
                        addNote={this.handleAddNote}
                    />
                </div>
            </div>
        )
    }
})
module.exports = Profile;