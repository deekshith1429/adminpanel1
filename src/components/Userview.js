import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

let url=`https://petswonder.co.in/petswonder/api/saveOrder/getOrdersDetails`;

class Userview extends Component {

constructor(props) {
    super(props)    

    this.state=
    {
        userdetails:''
    }
}

    ///console.log(props.match.params.id);

render()
{
    //desctructuring
    const { idno, name, username, email, phone, website }= this.state.userdetails

    return (<>
        
        <div className="container p-5">

            <h3 className="py-3 text-center">User Selected  { this.props.match.params.idno} Parameter Details.....</h3>    

                <table className="table table-bordered w-50 mx-auto">

                    <tbody>
                        
                        <tr>
                            <th>ID</th> 
                            <td>{ idno }</td>
                        </tr>

                        <tr>
                            <th>NAME</th> 
                            <td>{ name }</td>
                        </tr>

                        <tr>
                            <th>USERNAME</th> 
                            <td>{ username }</td>
                        </tr>

                        <tr>
                            <th>EMAIL</th> 
                            <td>{ email }</td>
                        </tr>

                        <tr>
                            <th>PHNO</th> 
                            <td>{ phone }</td>
                        </tr>

                        <tr>
                            <th>WEBSITE</th> 
                            <td>
                                <a target="_blank" href={`http://www.${ website }`}> { website } </a>
                            </td>
                        </tr>

                        <tr>
                            <th colSpan="2" className="text-center">   <Link to={`/users`} className="btn btn-primary">Goback</Link> </th>
                        </tr>

                    </tbody>
                </table>



          

        </div>

    </>)

}//render 


componentDidMount()  //HTTP_RESTAPI_CALLS
 {
    
     axios.post(`${url}/${this.props.match.params.idno}`).then( (res)=> this.setState({  userdetails: res.data }) )
 }  

}


export default Userview;