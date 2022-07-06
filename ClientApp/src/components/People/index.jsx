import React, { Component } from 'react';
import axios from "axios";
export class People extends Component
{
    constructor(props)
    {
        super(props);
        this.showdetail=this.showdetail.bind(this);
        this.showUrl=this.showUrl.bind(this);
        this.state={
            loading:false,
            items:[]
        }
    }
    showdetail(id)
    {
        const {history}=this.props;
        return history.push('/People/detail/'+id);
    }
    editItem(id)
    {
        const {history}=this.props;
        return history.push('/People/edit/'+id);
    }
    deleteitem(id)
    {
        axios.delete('/api/people/?Id='+id).then((result)=>{
            console.log(result);
            this.GetData();
        });
    }
    showUrl(t)
    {
        t.preventDefault();
        const {history}=this.props;
        return history.push('/People/create');
    }
    componentDidMount(){
        this.GetData();
    }
    LoadDataTable(alldata)
    {
        return <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Family</th>
                    <th>Edit|Detail|Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    alldata.map((it)=>(
                    <tr key={it.id}>
                        <td>{it.id}</td>
                        <td>{it.name}</td>
                        <td>{it.family}</td>
                        <td><button onClick={()=>this.editItem(it.id)}>Edit</button>|<button onClick={()=>this.showdetail(it.id)}>Detail</button>|<button onClick={()=>this.deleteitem(it.id)}>Delete</button></td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    }
    GetData(){
        axios.get('/api/people/list').then((result)=>{
            console.log(result);
            this.setState({loading:true,items:result.data});
        });
    }
    render()
    {
        let contents=this.LoadDataTable(this.state.items);
        return this.state.loading?(
            <div>
            <h1>PersonList</h1>
            <a className="btn btn-success" onClick={this.showUrl}>add new item</a>
            {contents}
        </div>):(<em>loading...</em>)
    }
}