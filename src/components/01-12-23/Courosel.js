import { Component } from "react";
class Carousel extends Component{
  state={
    arr:["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg","https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"],
    count:0
  }
  handleClick1=()=>{
    if(this.state.count===0){
      this.setState({
        count:5
      })
    }
    else{
      this.setState({
        count:this.state.count--
      })
    }
    alert(this.state.count)
  }
  handleClick2=()=>{
    if(this.state.count===5){
      this.setState({
        count:0
      })
    }
    else{
      this.setState({
        count:this.state.count++
      })
    }
    alert(this.state.count)
  }
  render(){
    return(
        <>
        <br/><br/><br/>
        <img src={this.state.arr[this.state.count]} width={'100%'} height={400}/>
        <center><button className="btn btn-danger" onClick={this.handleClick1}>Prev</button>
        <button className="btn btn-success" onClick={this.handleClick2}>Next</button></center>
        </>
    )
  }
}
export default Carousel;