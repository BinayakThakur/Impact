import { useEffect, useState } from "react";

const Data = () =>{
    const[fresh,setFresh] = useState(<>check</>);
    // eslint-disable-next-line
    var row=[]
    const[data,setData] = useState();
    const[forSearch,setForSearch] = useState();
    const setter=(data)=>{
        setFresh(data)
        setForSearch(data)
    }
    useEffect(
        // eslint-disable-next-line
        ()=>{
            fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
            .then(response => response.json())
            .then(data => setter(data)
            ) 
            .catch((err)=>console.log(err))
            
            // eslint-disable-next-line
        },[]
    )
    
    useEffect(
        ()=>{
           
            for(var i=0;i<fresh.length;i++){
                
                row.push(
                    <div class="card-5" >
                        
                        <br></br>

                    <table >
              
                    Candidate Profile
                 
                        <br></br>
                      
                    <tr>
                        
                        <td><img src={fresh[i].Image} alt="" width={300}></img></td>
                        <td width={400}> <h2>Candidate Name:</h2><h1>{fresh[i].name}</h1><hr></hr>Candidate id : {fresh[i].id}</td>
                        
                    </tr>
                   
                    </table>
                    </div>
                )
            }
           
            setData(row)
            // eslint-disable-next-line
        },[fresh,row]
    )
    const search =(e)=>{
        var search = e.target.value;
     
        var result = forSearch.filter(
            (item)=>{
                return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            }
        )
        
        setFresh(result);
    }
    
    return (<center>
        <input type="text" placeholder="Search Candidate Name" onChange={search}></input>
      
        {data}</center>);
}
export default Data;
