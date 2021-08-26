import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {LinkContainer} from "react-router-bootstrap";
class Login extends Component{
    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state ={
            username: '',
            password :''
        }
    }
    

      onChangeUsername(e){
          this.setState({
              username: e.target.value
          })
      }
      onChangePassword(e){
          this.setState({
              password: e.target.value
          })
      }
      onSubmit(e){
          e.preventDefault();
          
          
          const obj ={
            //   id: 8,
            //   password: 'aku'
                username: this.state.username,
                password: this.state.password
          };
          axios.post('http://localhost:5000/api/signin', obj)
          .then(res => {
          
          if(localStorage.setItem('a', res.data.token) !== null) {
            window.location.href = 'http://localhost:3000/jurnal';
          }
          console.log('login.sukses')
    })
 
        } 
    render(){
        return(
            <div className="container">
               <form onSubmit={this.onSubmit}>
               <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        name="username"
                        />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="username"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        name="password"
                        />
                </div>
                <button type="submit" onClick={onsubmit}  className="btn btn-success"> submit</button>
               </form>
            </div>
        )
    }
}

export default Login;