import React, { Component } from "react";
import Users from "./funCom";
import './App.css';
export default class User2 extends Component {
    constructor() {
        super();
        console.log("Constructur");

        this.state = {
            data: "Sahil"
        }
    }
    /*    apple(){
           this.setState({
               data:'Sahil Nawariya'
           })
       } */
    componentDidMount() {
        console.log("componentDidMount");

    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    render() {
        console.log("Render");

        return (
            <div>
                {/*  <div className="App">
                    <h1>{this.state.data}</h1>
                    <button onClick={()=>this.setState({data:'Sahil Nawariya'})}>Update Data</button>
                </div> 
                <div className="App">
                    <h1>{this.props.name[1]}</h1>
                    <h1>{this.props.email[1]}</h1>
                    <h1>{this.props.other.Address}</h1>
                    <h1>{this.props.other.State}</h1>
                </div>*/}
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.setState({data:'Sahil Nawariya'})}>COme</button>
            </div>
        )
    }

}