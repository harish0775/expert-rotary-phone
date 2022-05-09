import React, { Component } from 'react'

class Login extends Component {
    constructor () {
      super();
      this.state = {
        email: '',
        password: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange (e) {
      // check it out: we get the evt.target.name (which will be either "email" or "password")
      // and use it to target the key on our `state` object with the same name, using bracket syntax
      this.setState({ [e.target.name]: e.target.value });
      console.log([e.target.value])
    }
  
    render () {
      return (
    <form>
  
      <label>Email</label>
      <input type="text" name="email" onChange={(event)=>this.handleChange(event, "email")} />
  
      <label>Password</label>
      <input type="text" name="password" onChange={(event)=>this.handleChange(event, "password")} />
  
    </form>
  );
    }
  }
export default Login;