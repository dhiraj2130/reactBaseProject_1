import React from 'react';
var SearchGitHub = require('./SearchGitHub');
export class Main extends React.Component{
    render(){
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="text-center" style={{marginTop:15}}>
                        Navigation Bar
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>

        )
    }
}
