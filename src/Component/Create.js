import React, { Component } from "react";
import axios from 'axios';

class Create extends Component {
        state ={
            list:[]
          
    }
  
 
handleSubmit = (e) =>{ 
    e.preventDefault(); 
    const userData = { 
        title : e.currentTarget['blog_title'].value,
        description : e.currentTarget['blog_description'].value
    }
    axios 
    .post("http://localhost:8000/blog/",userData)
   
    .then((res) => { 
        console.log(res.data)
    }) 
    .catch(error => console.log(error)) 
    
  }
  
resetForm =() =>{
      this.setState({
          ...this.state,
          title:'',
          description:''
      })
  }
    
render() {
       
        return (
            <form onSubmit= {this.handleSubmit}>
                
               <div className="some">
                    <h2>Create Page</h2>
                </div>  
                <div className="some">
                    <label>Title</label>
                    <input type="text" className="form-control" name="blog_title"
                    placeholder="Enter the title" />
                </div>

                <div className="some">
                    <label>Description</label>
                    <textarea className="form-control" rows="4" name="blog_description"
                    placeholder="Description"   />
                </div>
                <br/>
                <br/><br/><br/>
                
                <div className="some">
                
                 <button type='submit' className="btn btn-primary btn-block" >Create</button> 
                <button type='reset' onClick={this.resetForm}>Reset</button>
                
                </div>
            </form>
        );
    }
}
export default Create