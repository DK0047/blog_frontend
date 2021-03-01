import React, { Component } from "react";
import axios from 'axios'
export default class Signup extends Component {
    constructor(props){
      super(props)

        this.state ={
          firstname:'',
          Lastname:'',
          password:'',
          username:'',

        }
    }
    changeHandler = (e) =>{
      this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = (e) =>{
      e.preventDefault()
      console.log(this.state);
      axios.post("http://127.0.0.1:8000/signup/",this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error =>{
          console.log(error);
      })
    }
    render() {
        const{firstname,lastname,username,password}=this.state
        return (
            <form>
                <div className="keyword">
                <h2>Register</h2>
                <i class="fa fa-user icon"></i>
                </div>
                <div className="keyword">
                    <label>First name</label>
                    <i class="fa fa-envelope icon"></i>
                    <input type="text" className="form-control" name="firstname" placeholder="First name"
                    value = {firstname} onChange={this.changeHandler}/>
                </div>
                <div className="keyword">
                    <label>Last name</label>
                    <i class="fa fa-envelope icon"></i>
                    <input type="text" className="form-control" name="lastname" placeholder="Last name" 
                    value= {lastname} onChange={this.changeHandler} />
                </div>

                <div className="keyword">
                    <label>Username</label>
                    <i class="fa fa-envelope icon"></i>
                    <input type="username" className="form-control" name="username" placeholder="Enter username" 
                    value={username}  onChange={this.changeHandler}/>
                </div>

                <div className="keyword">
                    <label>Password</label>
                    <i class="fa fa-key icon"></i>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" 
                    value ={password} onChange={this.changeHandler} />
                </div>
                <div className="keyword">
                <button onClick = {this.handleSubmit} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
                </div>
                
            </form>
        );
    }
}