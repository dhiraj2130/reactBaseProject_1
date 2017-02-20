import React from'react';

class  Bio extends React.Component{
    constructor(){
        super();
    }

    setRef(ref){
        this.address = ref;
    }
    handleSubmit(){
        var newAddress = this.address.value;
        this.address.value ='';
        this.props.changeAddress(newAddress);
    }
    render(){
       return (
        <div>
            <h3> Profile </h3>
            <div><label>Name : </label><b>{this.props.name}</b></div>
           <div> <label>Address : </label><b>{this.props.address}</b></div>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Change Address" ref={this.setRef.bind(this)}/>
                <span className='input-btn-group'>
              <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>Change Address </button>
            </span>
            </div>
        </div>
       );
    }
}

export default Bio
