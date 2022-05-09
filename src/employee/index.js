import React, { Component } from 'react'
class index extends Component{
  constructor(props) {
    super(props);
    
      
      this.state =     
  {   
      id : '',
      Ename : '',
      city : '',
      phone : '',
      Salary : '',
    
     user: { 
      ename : 'ehR',
      city : 'UDE',
      phone : 'uph',
      Salary : 2312
    },
    employees:[
     { Ename : 'ehR',
      city : 'UDE',
      phone : 'uph',
      Salary : 2312}
        ]
   }
   this.enamehandleChange = this.enamehandleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
   this.handleUpdateProduct = this.handleUpdateProduct.bind(this);
  }


  componentDidMount(){
    fetch("http://localhost:3004/employees",{
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      }
    })
    .then(response => response.json())
    .then((value)=>{
      this.setState({
        employees : value
      } )
    
  })
    console.log("respone3");
  }

  enamehandleChange(event) {
    console.log("value",event.target.value);
    this.setState({ [event.target.name]:event.target.value } )
  }
  handleUpdateProduct= async(id)=>{
    // const data = {
    //   id: this.state.id,
    //   Ename: this.state.Ename,
    //   city :this.state.city,
    //   phone: this.state.phone,
    //   Salary: this.state.Salary
    // }

    
  //  await  fetch("http://localhost:3004/employees",{
  //     "method": "GET",
  //     "headers": {
  //       "content-type": "application/json",
  //       "accept": "application/json"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then((value)=>{
  //     this.setState({
  //       employees : value
  //     } )
    
  // })

    console.log("update",id)
    await  fetch(`http://localhost:3004/employees/${id}`, {
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify({
          id : this.state.id,
          Ename: this.state.Ename,
          city: this.state.city,
          phone :this.state.phone,
          Salary :this.state.Salary
        })
      })
      await  fetch("http://localhost:3004/employees",{
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json"
        }
      })
      .then(response => response.json())
      .then((value)=>{
        this.setState({
          employees : value
        } )
      
    })





    // console.log("Update Called");
    // const { employees } = this.state;
    // const items = employees.find((item) => item.id==id);
    // console.log(items.Ename);
    // this.setState({ 
    //   Ename :items.Ename,
    //   city :items.city,
    //   phone :items.phone,
    //   Salary : items.Salary,
    //  } )
  
  }
 
 async handleSubmit(event) {
  event.preventDefault();
  const data = {
     Ename: this.state.Ename,
     city: this.state.city,
     phone :this.state.phone,
     Salary :this.state.Salary
  }
  await fetch("http://localhost:3004/employees", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify(data)
    })
    await  fetch("http://localhost:3004/employees",{
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      }
    })
    .then(response => response.json())
    .then((value)=>{
      this.setState({
        employees : value
      } )
    
  })
      }


    handleDeleteProduct = async (id) => {
  await fetch("http://localhost:3004/employees/"+id,{
      "method": "DELETE",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      }
    })
    await  fetch("http://localhost:3004/employees",{
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      }
    })
    .then(response => response.json())
    .then((value)=>{ this.setState({ employees : value } )})

}
    render(){
      // fetch("http://localhost:3004/employees", {
      //   "method": "GET",
      //   "headers": {
      //     "content-type": "application/json",
      //     "accept": "application/json"
      //   }
      // }).then((res)=>res.json())
      

      const{employees} = this.state;

    return (
      <div>
      
           <table border="1" style={{ float: 'left' }}>
           <tbody>
         <tr>
           <td>ID</td>
           <td>Name</td>
           <td>city</td>
           <td>Phone</td>
           <td>Salary</td>
           <td>Delete</td>
           <td>Update</td>
         </tr>
          {
            employees.map((item,id) =>
              <tr key={id}>
                <td name = "id">{item.id}</td>
                <td name = "Ename">{item.Ename}</td>
                <td name = "city">{item.city}</td>
                <td name = "phone">{item.phone}</td>
                <td name = "Salary">{item.Salary}</td>
                <td><button  onClick={() => this.handleDeleteProduct(item.id)}>Delete</button></td>
                <td><button onClick={() => this.handleUpdateProduct(item.id)}  >Update</button></td>
              </tr>
            )
          }
        </tbody>
      

      </table>
      <div>

      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <br/> <br/> <br/>
    
     <form onSubmit= {this.handleSubmit} >
     
           Ename:<input placeholder='Harish' name = "Ename" value ={this.state.Ename} type='text' onChange={this.enamehandleChange} />
          City:<input placeholder='Delhi' name = "city"type='text' value ={this.state.city} onChange={this.enamehandleChange} />
         <br/> Phone:<input placeholder='9319130010' name = "phone"type='text' value ={this.state.phone} onChange={this.enamehandleChange} />
           Salary:<input  placeholder='5000000' name = "Salary"type='text' value ={this.state.Salary} onChange={this.enamehandleChange} /> 
          <input type="submit" value="Submit" />
          
      
         </form>
      </div>
      </div>

      
    )
   
    
  }
  
}

export default index

