import React, { Component } from 'react';
import axios from "axios";

export class PeopleEdit extends Component
{

    constructor(props)
    {
        super(props);
         this.onChangeName=this.onChangeName.bind(this);
         this.onChangeFamily=this.onChangeFamily.bind(this);
         this.SubmitForm=this.SubmitForm.bind(this);
         this.returnURL=this.returnURL.bind(this);
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
componentDidMount(){
    const {id}=this.props.match.params;
    //this.setState({id:id});
    this.GetData(id);
}
returnURL(){
    const {history} = this.props;
    return history.push('/People/index');
}
GetData(id){
    axios.get('/api/people/find?id='+id).then((result)=>{
        console.log(result);
        this.setState({id:result.data.id,name:result.data.name,family:result.data.family});
    });
}
SubmitForm(e)
{
    e.preventDefault();
    const {history}=this.props;
 
    axios.put('/api/People/',{id:this.state.id,name:this.state.name,family:this.state.family}).then((result)=>{
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
                <button type="submit" className="btn btn-success">submit</button>
                <button onClick={this.returnURL} className="btn btn-danger">return</button>
                </div>
            </div>
        </form>
    }

}