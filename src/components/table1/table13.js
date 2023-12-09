
export function Thead(props){
    return(
        <tr style={{border:"1px solid black"}}>
            <th style={{border:"1px solid black"}}>{props.one}</th>
            <th style={{border:"1px solid black"}}>{props.two}</th>
            <th style={{border:"1px solid black"}}>{props.three}</th>
        </tr>
    )
}
export function Tbody(props){
    return(
        <tr style={{border:"1px solid black"}}>
            <td style={{border:"1px solid black"}}>{props.one}</td>
            <td style={{border:"1px solid black"}}>{props.two}</td>
            <td style={{border:"1px solid black"}}>{props.three}</td>
        </tr>
    )
}