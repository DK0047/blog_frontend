import React, { Component } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
export default class Update extends Component {
    state ={
        id:'',
        title:'',
        description:'',
        list:{}
        
    }
componentDidUpdate(){
    axios 
    .put(`http://127.0.0.1:8000/blog/${this.state.id}/`)
    .then((res) => { 
        const list= res.data
        this.setState({list:list.response})
        this.props.history.push('/All Blogs') 
        
    }) 
    .catch(error => console.log(error)) 
    
}
render() {
    
        return (
           <form onSubmit= {this.handleSubmit}>
                 <div className="group">
                <h2>Update Page</h2>
                </div>
                <div className="group">
                    <label>Title</label>
                    <input type="text" className="form-control" value ={this.state.list.title} name="title" placeholder="Enter the title" />
                </div>

                <div className="group">
                    <label>Description</label>
                    <textarea class="form-control" rows="4" value ={this.state.list.description}  placeholder="Description" />
                </div>
                <br/>
                <br/><br/><br/>
                <div className="group">
                <button type="submit" className="btn btn-primary btn-block">Update</button>
                <button type="button" onClick={useHistory.goBack}>Back</button>
                </div>
            </form>
        );
    }
}