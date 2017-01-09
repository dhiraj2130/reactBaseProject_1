var React = require('react');

var UserProfile = React.createClass({
    render:function(){
        return(
            console.log('BIO',this.props.bio),
            <div>
                <p> UserProfile </p>
                <p> Username: {this.props.username} </p>
            </div>
        )

    }
})

module.exports = UserProfile;