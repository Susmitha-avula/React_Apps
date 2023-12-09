import { PureComponent, Component } from "react";
class PureComp extends Component{
    state={
        count:0
    }
    handleClick=(value)=>{
        this.setState({
            count:this.state.count+value
        })
    }
    render(){
        return(
            <>
            <h1>Counter Value Is: {this.state.count}</h1>
            <Child1 onClick={()=>this.handleClick(1)}>{'Increment'}</Child1>
            </>
        )
    }
}
export default PureComp;
class Child1 extends PureComponent{
    render(){
        return(
            <>
            <button onClick={this.props.onClick}>{this.props.children}</button>
            </>
        )
    }
}