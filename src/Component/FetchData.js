import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function FetchData() {
    let history = useHistory()
    const[id,setId]=useState(0)
    const[articles,setArticles] = useState([])


useEffect(() => {
        axios.get('http://127.0.0.1:8000/blog/')
        .then(resp =>{ 
            console.log(resp.data,'response')
            setArticles(resp.data)
        })
       .catch(error =>console.log(error))
       
},[])

const handleDelete = (e,idTake)=>{
    e.preventDefault()
    axios.delete(`http://127.0.0.1:8000/blog/${idTake}/`)
    .then(res=>{
        console.log(res)
     
    })
}

const handleEdit= (e,iduse) =>{ 
    e.preventDefault();
    setId(iduse) 
    console.log(iduse)
    history.push("/Update/"+iduse)
    
}   
const handleSubmit= (e) =>{ 
    e.preventDefault();
    const userData = { 
        title : e.currentTarget['title'].value,
        description : e.currentTarget['description'].value
    }
    axios 
    .put(`http://127.0.0.1:8000/blog/${id}/`,userData)
    .then((res) => { 
            console.log(res.data)
    }) 
    .catch(error => console.log(error)) 
    
}     
return(
     <div className="bb">
        <form onSubmit={handleSubmit}>
        <h2>All blog view</h2>
            {articles.map(articles =>
            <div key = {articles.id}><br/><hr/>
            <h4>{articles.title}</h4>
            <h5>{articles.description}</h5>
            <h5>{articles.date_published}</h5>
            <a href="#!"className="btn btn-primary" onClick={e=>{handleEdit(e,articles.id)}}>Update</a>
            <a href="#!" className="btn btn-primary" onClick={e=>{handleDelete(e,articles.id)}} >Delete</a>
            </div>
    
    )}
    </form>
    </div> 
)
    
}
export default FetchData
