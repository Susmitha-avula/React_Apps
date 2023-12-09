export function Button(props){
    
    return(
        <>
        <button style={{width:props.width,height:props.height,backgroundColor:props.BgColor}}>{props.Text}</button>
        <br/>
        </>
    )
}

// export function ColorPick(){
//     let arr=["red",'green','blue','yello','pink','light blue','orange','white','whitesmoke']
//     let k=Math.floor(Math.random()*10)
//     return arr[k]
// }
export function ColorPick() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }