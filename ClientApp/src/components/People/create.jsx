import React, { Component } from 'react';
import axios from "axios";

export class PeopleCreate extends Component
{

    constructor(props)
    {
        super(props);
         this.onChangeName=this.onChangeName.bind(this);
         this.onChangeFamily=this.onChangeFamily.bind(this);
         this.SubmitForm=this.SubmitForm.bind(this);

         this.state={
             id:0,
             name:'',
             family:''
         }
    }
onChangeName(e)
{
    this.setState({name:e.target.value});
}
onChangeFamily(e)
{
    this.setState({family:e.target.value});
}

SubmitForm(e)
{
    e.preventDefault();
    const {history}=this.props;
 
    axios.post('/api/People/',{id:this.state.id,name:this.state.name,family:this.state.family}).then((result)=>{
        console.log(result);
        return history.push('/people/index');
    });
    
}
    render()
    {
        return <form onSubmit={this.SubmitForm} className="Container" >
            <div className="row">
                <div className="col-12 formgroup">
                    <label>Name:</label>
                    <input value={this.state.name} onChange={this.onChangeName} type="text" name="Name" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 formgroup">
                    <label>Family:</label>
                    <input value={this.state.family} onChange={this.onChangeFamily} type="text" name="Family" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 formgroup">
                    <input type="submit" className="btn btn-danger" value="submit form"/>
                </div>
            </div>
        </form>
    }

}