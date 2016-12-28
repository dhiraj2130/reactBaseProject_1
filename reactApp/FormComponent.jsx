import React from 'react';

export class FormData extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            data : []
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(e){

        this.setState({
            data: [...this.state.data,e.target.value] // data .push is not immutable. this will not work in flux
        });
    }
    render(){
        var myStyle = {
            border : "solid red 2px"
        }
        return(
            <div>
                <label>add name</label>
                <input type = "text" value = {this.state.data}
                       onChange = {this.updateState} />
                <h4>{this.state.data}</h4>
                <Content updateStateProp={this.updateState} myDataProp={this.state.data}></Content>
            </div>
        )
    }

}

class Content extends React.Component{
    render(){
        return(
            <div>
                <label>update from child content</label>
                <input type = "text" value = {this.props.myDataProp} onChange = {this.props.updateStateProp} />
                <input type = "text" value = {this.props.myDataProp} onChange = {this.props.updateStateProp}  />
            </div>
        )
    }
}


