
import React, { Component } from 'react'
 class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      val: [
       { 
         "value":''   
        }
      ]
    
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleUpdateProduct = this.handleUpdateProduct.bind(this);
  }
  // handleUpdateProduct=(id)=>{
  //   console.log("Update Called");
  //   const { employees } = this.state;
  //   const items = employees.find((item) => item.id==id);
  //   console.log(items.Ename);
  //   this.setState({ user: { ...this.state.user, ename:items.Ename } })

  // }

    handleChange(event) {
    this.setState({value: event.target.value});
    }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    fetch("http://localhost:3004/data", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify([
       { 
         value: this.state.value
      }]
      )
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
    event.preventDefault();
      }
componentDidMount(){
    fetch("http://localhost:3004/data")
      .then(res => res.json())
      .then(
        (result) => 
            this.setState({
         value:result.value
            })
        ).then(()=>console.log(this.state.value))
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
      {/* <button onClick={() => this.handleUpdateProduct(item.id)}  >Update</button> */}
    </form>
    )
  }
}
export default index;
