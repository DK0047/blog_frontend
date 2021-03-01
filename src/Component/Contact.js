import React, { Component } from "react";
import axios from 'axios';
export default class Contact extends Component {
    state ={
        list:[]
    }
    
    render() {
        return (
            <form>
                <div className="size">
                <h3>Contact</h3>
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
                <br/>
                <div className="size">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Email" />
                </div>

                <div className="size">
                    <label>Message</label>
                    <textarea class="form-control" rows="3" placeholder="message" />
                </div>
                <br/>
                <br/><br/>
                <div className="size">
                <button type="submit" className="btn btn-primary btn-block">Send Us</button>
                </div>
            </form>
        );
    }
}