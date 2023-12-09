function ChildProp(props){
    return(
        <div>
            <h1>{props.children[0]}</h1>
            <h2>{props.children[1]}</h2>
        </div>
    )
}
export default ChildProp;