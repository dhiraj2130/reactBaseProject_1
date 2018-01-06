import React from 'react';
var Router = require('react-router');
export class SearchGitHub extends React.Component{
    // mixins:[Router.History],

    handleSubmit(){
    var username = this.userNameRef.value;
    this.userNameRef = '';
    this.history.pushState(null,"profile/"+username);
    }

    getRef(ref){
        this.userNameRef = ref;
    }

    render(){
        return(
            <div className="col-sm-12">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control" ref={this.getRef} />
                    </div>
                    <div className="form-group col-sm-5">
                    <button type="submit" className="btn btn-block btn-primary">Search Github</button>
                    </div>
                </form>
            </div>
        )
    }
}
