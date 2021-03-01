import React, { Component } from 'react'
import axios from 'axios';

export class Form extends Component {
    constructor(props){
        super(props)
            this.state = {
                username:'',
                password:'',
                posts:[]
        }
    }
   
    componentDidMount(){
        axios.get('https://127.0.0.1.8000/blog').then(res=>{
        console.log(res);
        this.setState({list:res.data});
        });
    }
    
    usernameHandler = (event) => {
        this.setState({
            username:event.target.value
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password:event.target.value
        })
    }
 render() {
        const {posts}= this.state

        return (
            <div classname = "container">
                <input type ="text" value = {this.state.username} placeholder = "enter the user name"  className="form-control" onChange = {this.usernameHandler} />
                <input type ="text" value= {this.state.password} placeholder = "enter the password"  className="form-control" onChange = {this.passwordHandler}/>
                <button className = "btn btn-primary">Login</button>
                {posts.map(post =>
                <h2 key = {post.id}>{post.title}</h2>
                )}

            </div>
        )
    }
}

export default Form
