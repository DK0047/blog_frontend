import React ,{Component} from 'react'
import {Link} from 'react-router-dom'

 
class Mainpage extends Component{
    handleClick(){
        console.log('this is:',this)
     }
        render(){
            return(
                <div className='head'
                id="intro-example"
                class="p-5 text-center bg-image"bg="background-image: url('https://www.incimages.com/uploaded_files/image/1920x1080/getty_916036268_406753.jpg')">
                
                <div class="mask">
                <div class="d-flex justify-content-center align-items-center h-400 width =200">
                <div class="text-DARK">
                <h1 class="mb-3">WEL COME TO  BLOG APPLICATION</h1>
                <Link to ='/Login' className="btn btn-success" button onClick={()=>this.handleClick()}>Login</Link>
                <Link to ='/signup' className="btn btn-success" button onClick={()=>this.handleClick()}>Register</Link>
                            
                            </div>
                        </div>
                    </div>
                </div>
            )
                }
    
}
export default Mainpage

