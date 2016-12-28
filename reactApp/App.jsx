import React from 'react';
//https://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm
import { FormData } from './FormComponent.jsx';
class App extends React.Component {
constructor(props){
    super(props);

    this.state={
        header:"this is app header set in App",
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
    this.setStateHandler = this.setStateHandler.bind(this);
}
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

setStateHandler (){
    var item = {
        "id":100,
        "name":"stateSetBar",
        "age":"300"
    };
    
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({data:myArray})
};

    render() {
        var myStyle = {
            fontSize : 50,
            color:'#FF0000'
        }

        return (
            <div>
                <h1 style ={myStyle} >Hello World!!!</h1>
                <Header headerProps={ this.state.header }/>
                <Content contentHeader={ this.state.header }/>
                <table>
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                    </tbody>
                </table>
                <label>name</label>
                <input type="text" value={this.state.}
                <button onClick={this.setStateHandler}> Set State </button>
                <FormData/>
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
        var myStyle ={
            border:"solid red 2px"
        }
        return (
            <div  style={myStyle}>

                <h1>{ this.props.headerProps }</h1>
            </div>
        )
    }
}
class Content extends React.Component{

    render(){
        var myStyle ={
            border:"solid green 2px"
        }
        return(
            <div style={myStyle}>
                <h2>Content</h2>
                 { this.props.contentHeader}
            </div>
        );
    }
}

export default App;