import React, { Component } from 'react'
import users from '../data/users';
class Login extends Component {
    constructor(){
        super();
        this.state={
            vusername:"",
            vpass:"",
            alert:"",
            alertText:""
        }
    }
    formSubmit=(e)=>{
        e.preventDefault();
        if (!this.state.vusername || !this.state.vpass) {
            this.setState({
                alert:"alert-warning",
                alertText:"please, fill the input"
            })
        }else{
            if (this.state.vusername === users[0].username && this.state.vpass===users[0].password) {
                this.setState({
                    alert:"alert-success",
                    alertText:"login successfull"
                })   
            }else{
                this.setState({
                    alert:"alert-danger",
                    alertText:"login wrong!"
                })  
            }
        }
    }
  render() {
    return (
      <div>
        <h1 className='text-center'>Login Page</h1>
      
           <div className="d-flex justify-content-center align-items-center flex-column mt-5">
           <p className={`col-3 alert ${this.state.alert}`}>{this.state.alertText}</p>
           <form className='col-4' onSubmit={this.formSubmit}>
            <div className="mb-3">
                <label  className="form-label">Username</label>
                <input onChange={(e)=>{this.setState({vusername:e.target.value})}} type="text" className="form-control"  />
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input onChange={(e)=>{this.setState({vpass:e.target.value})}} type="password" className="form-control"  />
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
           </div>

      </div>
    )
  }
}

export default Login