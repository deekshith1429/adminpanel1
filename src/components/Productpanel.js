import React, { Component } from 'react'

class Productpanel extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            sellerNumber:'',
            description:''


        }
    }
    submit()
    {
        let url="";
        let data=this.state;
        fetch(url,{
            method:'POST',
            header:{

            }
        })
    }
    render() {
        return (
            <div>
                <h1>products add</h1>
                <input type="text" value={this.state.title} name="title"
                 onChange={(data)=>{this.setState({title:data.target.value})} }/> <br/> <br/>

                <input type="text" value={this.state.sellerNumber} name="sellerNumber" 
                 onChange={(data)=>{this.setState({sellerNumber:data.target.value})} }/> <br/> <br/>

                <input type="text" value={this.state.description} name="description"
                 onChange={(data)=>{this.setState({description:data.target.value})} }/> <br/> <br/>

                <button onClick={()=>{this.submit()}} className="btn btn-primary">Submit</button>
            </div>
        )
    }
}
export default Productpanel;