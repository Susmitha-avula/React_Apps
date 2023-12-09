import { Component } from "react";
class Flex extends Component{
    state={
        isSubscribe:false,
    }
    handleClick=()=>{
        this.setState(
            {
                isSubscribe:!this.state.isSubscribe,
            }
        )
    }
    render(){   
        return(
            <>
            <button className={this.state.isSubscribe?"btn btn-success":'btn btn-danger'} onClick={this.handleClick}>{this.state.isSubscribe?"Thanks For Subscribing":"Please Subscribe"}</button>
            {
                this.state.isSubscribe
                ?
                <h3>Hello User, Welcome to our channel</h3>
                :
                <h3>Hello User, Please Subscribe</h3>
            } 
            </>
        ) 
    }
} 
export default Flex;