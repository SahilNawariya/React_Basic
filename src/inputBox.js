import React, { useState } from "react";
import './App.css';
export default function Input() {
    
    
/*     
        const [data, setData] = useState(true)
        function getData(val) {
        console.log(val.target.value)
        setData(val.target.value)
        setPrint(false)
    } */

    const [name,setName]=useState("");
    const [tnc,setnc]=useState(false);
    const [intrest,setintrest]=useState("");
    function getFormData(e){
        e.preventDefault()
        console.log(name,tnc,intrest);
        
    }

    return (
        <div className="App">
            <h1>handle Form in React</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)} /><br/>
                <select onChange={(e) => setintrest(e.target.value)}>
                    <option>select Option</option>
                    <option>Marvels</option>
                    <option>DC</option>
                </select><br />
                <input type="checkbox" onChange={(e) => setnc(e.target.checked)} />
                <span>Accept Terms And Condition</span><br />
                <button type="submit">Submit</button>
            </form>


            {/* {
                data ? <h1>hello world!</h1> : null
            }

            <input type="text" onChange={getData} style={{width:250,height:60,margin:10}} /><br /> */}
     {/*        <button style={{width:100,height:40,margin:5,marginLeft:10,borderRadius:5,backgroundColor:'grey'}} onClick={() => setData(false)}>Hide Data</button>
            <button style={{width:100,height:40,margin:5,marginLeft:10,borderRadius:5,backgroundColor:'grey'}} onClick={() => setData(true)}>Print Data</button> */}

         {/*    <button style={{ width: 100, height: 40, margin: 5, marginLeft: 10, borderRadius: 5, backgroundColor: 'grey' }} onClick={() => setData(!data)}>togle</button> */}
        </div>
    )
}