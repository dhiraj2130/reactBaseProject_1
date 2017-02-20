var React = require('react');
//var ReactDOM = require('react-dom');
var SearchGitHub = require('./SearchGitHub');
var Main = React.createClass({
    render:function(){
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
});

//ReactDOM.render(<Main />,document.getElementById('app'));
module.exports = Main;