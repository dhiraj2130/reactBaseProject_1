var React = require('react');

var Repos = React.createClass({
    render:function(){
        var repos = this.props.repos.map(function(repo, index) {
            return (
                <li className="list-group-item" key={index}>
                { repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
                { repo.description && <p> { repo.description } </p> }
                </li>
            );
        });
        return(
           // console.log('REpose',this.props.repos),
            <div>
                <h3> User Reposs </h3>
                <ul className="list-group">
                {repos}
                </ul>
            </div>
        )

    }
})

module.exports = Repos;