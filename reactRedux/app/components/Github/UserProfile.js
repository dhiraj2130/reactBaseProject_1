var React = require('react');

var UserProfile = React.createClass({
    render:function(){
        return(

            <div>
                <ul className="list-group">
                    {this.props.bio.avatar_url && <li className="list-group-item"><img src={this.props.bio.avatar_url}
                    className="img-responsive"/></li> }

                </ul>
            </div>
        )

    }
})

module.exports = UserProfile;