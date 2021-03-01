import React, { Component} from 'react';
import axios from 'axios'

class Login extends Component {
  constructor(props){
      super(props)

        this.state ={
          username:'',
          password:''

        }
    }
    changeHandler = (e) =>{
      this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = (e) =>{
      e.preventDefault()
      console.log(this.state);
      axios.post("http://127.0.0.1:8000/login/",this.state)
      .then(response => {
        console.log(response);
        this.props.history.push('/App')
      })
      .catch(error =>{
          console.log(error);
      })
    }
    render(){
      const{username,password}=this.state

      return (
      <div className = "App">
      <br/>
      <h1> LOGIN </h1>
      <br/>
      <div className = "form">
      <lable htmlFor = "Username" className = "Form-label">Username</lable>
      <input type = "text" className = "form-control" name="username" placeholder ="enter the username"
        value = {username} onChange={this.changeHandler}/>
      </div>
      <br/>

      <div className = "form">
      <lable htmlFor = "password" className = "Form-label">Password</lable>
      <input type = "password"  className = "form-control" name="password" placeholder ="enter the password"
      value = {password} onChange={this.changeHandler}
      />
      </div>
      <br/>
      <div className="form">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <br/>
                <div className="form">
      <button onClick = {this.handleSubmit}  className = "btn btn-primary">Login</button>
        

      </div>
      
    </div>
  )
}
  }

export default Login
