// const arr = [10,4,87,9,56,48,2];
// var temp;

// function sortArray(arr){
//     for(var i = 0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//             temp = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = temp
//             i=-1
//         }
//    }
//    return arr;
   
// }

// console.log(sortArray(arr));


import React, { Component } from 'react'
export default class index extends Component {
  constructor(){
      super();
      this.state = {
         user:{
             ename : ""
         }
      }
}
componentDidMount(){
 fetch('http://localhost:4000/express/api',{ 
      mode: 'no-cors'}).then((response)=>response.json()).then((value)=>this.setState(
          { user: { ...this.state.user, ename: value.user.ename}
         }))
  }
  render() {

    return (
      <div>{this.state.user.ename}</div>
    )
  }
}
