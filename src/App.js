import { useState } from 'react';
import './App.css';
import Users from './funCom';
import User2 from './classCom';

function App() {
  const [data,setData]=useState("Sahil")
  function UpdateData(){
    setData("Sahil Baap Is This")
  }
  const [name, setName] = useState(["Sahil","Deepak","Naresh","Ritik","Ayush"])
  return (
    <div className="App">
{/*       <h1>
        {data}
      </h1>
      <button onClick={UpdateData}>Update Data</button>
    <h1>Props In React :)</h1>
      <Users name={name} email={["abcd",'noaj','hahfa','nansn']} other={{'Address':'Jaipur','State':'Rajastan'}}/>
    <button onClick={()=>setName(["Sahil Nawariya","Deepak Panday","Naresh Panwar","Ritik Mishra","Ayush Raj"])}>Update Name</button> */}


      <User2 name={name} email={["abcd",'noaj','hahfa','nansn']} other={{'Address':'Jaipur','State':'Rajastan'}}/>
    <button onClick={()=>setName(["Sahil Nawariya","Deepak Panday","Naresh Panwar","Ritik Mishra","Ayush Raj"])}>Update Name</button>
    </div>
  );
}

export default App;
