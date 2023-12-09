const { Component } = require("react");

class Table extends Component{
    state={
        Arr1:[{id:1,Name:'Rahul',Designation:"React"},{id:2,Name:'Ramesh',Designation:'Angular'},{id:3,Name:"Rajesh",Designation:"JS"},{id:4,Name:"Ramu",Designation:'React'},{id:5,Name:'Rakesh',Designation:"Angular"},{id:6,Name:"Raju",Designation:"JS"},{id:7,Name:"Rathod",Designation:"React"},{id:8,Name:"Ravali",Designation:"Angular"},{id:9,Name:"Raani",Designation:"JS"},{id:10,Name:"Rekha",Designation:"React"}],
        Arr2:[{id:1,Name:'Rahul',Designation:"React"},{id:2,Name:'Ramesh',Designation:'Angular'},{id:3,Name:"Rajesh",Designation:"JS"},{id:4,Name:"Ramu",Designation:'React'},{id:5,Name:'Rakesh',Designation:"Angular"},{id:6,Name:"Raju",Designation:"JS"},{id:7,Name:"Rathod",Designation:"React"},{id:8,Name:"Ravali",Designation:"Angular"},{id:9,Name:"Raani",Designation:"JS"},{id:10,Name:"Rekha",Designation:"React"}]
    }
    handleclick=(val)=>{
        if(val==='All'){
            this.setState({
                Arr1:this.state.Arr2
            })
        }
        else{
            let newArr=this.state.Arr2.filter((ele)=>{
                return ele.Designation===val
            })
            this.setState({
                Arr1:newArr
            })
        }
    }
    render(){
        return(
            <>
                <table className="table table-bordered w-25 table-primary">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Designation</th>
                    </tr>
                    {
                        this.state.Arr1.map((ele)=>{
                            return(
                                <>
                                    <tr>
                                        <td>{ele.id}</td>
                                        <td>{ele.Name}</td>
                                        <td>{ele.Designation}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </table>
                <button onClick={()=>{this.handleclick("All")}} className="btn btn-success">All</button>
                <button onClick={()=>{this.handleclick("React")}} className="btn btn-success">React</button>
                <button onClick={()=>{this.handleclick("Angular")}} className="btn btn-success">Angular</button>
                <button onClick={()=>{this.handleclick("JS")}} className="btn btn-success">JS</button>
            </>
        )
    }
}
export default Table;