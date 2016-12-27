import React from 'react';

class App extends React.Component {
constructor(){
    super();
    this.state={
        data:
        [
            {
                "id":1,
                "name":"Foo",
                "age":"20"
            },
            {
                "id":2,
                "name":"Bar",
                "age":"30"
            }
        ]
    }
}
    render() {
        var myStyle = {
            fontSize : 50,
            color:'#FF0000'
        }

        return (
            <div>
                <h1 style ={myStyle} >Hello World!!!</h1>
                <Header/>
                <Content/>
                <table>
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}
class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>header 1</h1>
            </div>
        )
    }
}
class Content extends React.Component{
    render(){
        return(
            <div>
                <h2>Content</h2>
                <p> This is content text !</p>
            </div>
        );
    }
}

export default App;