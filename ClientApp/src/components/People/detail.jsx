import React, { Component } from 'react';
import axios from "axios";

export class PeopleDetail extends Component
{

    constructor(props)
    {
        super(props);
         this.returnURL=this.returnURL.bind(this);
         
         this.state={
             id:0,
             name:'',
             family:''
         }
    }
returnURL(){
    const {history} = this.props;
    return history.push('/People/index');
}

componentDidMount(){
    const {id}=this.props.match.params;
    this.GetData(id);
}

GetData(id){
    axios.get('/api/people/find?id='+id).then((result)=>{
        console.log(result);
        this.setState({name:result.data.name,family:result.data.family});
    });
}
    render()
    {
        return <form className="Container" >
            <div className="row">
                <div className="col-12 formgroup">
                    <label>Name:</label>
                    <input value={this.state.name} readOnly type="text" name="Name" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 formgroup">
                    <label>Family:</label>
                    <input value={this.state.family} readOnly type="text" name="Family" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 formgroup">
                    <button onClick={this.returnURL} className="btn btn-danger">return</button>
                </div>
            </div>
        </form>
    }

}