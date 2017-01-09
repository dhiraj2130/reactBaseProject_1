var React = require('react');

var Repos = React.createClass({
    render:function(){
        return(
            console.log('REpose',this.props.repos),
            <div>
                <p> Reposs </p>

            </div>
        )

    }
})

module.exports = Repos;