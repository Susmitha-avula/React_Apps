import axios from "axios";
import { Component } from "react";
import style from "./Products.module.css"
class ProductList extends Component {
    state={
        Arr:[]
    }
    handleClick=()=>{
      axios.get('https://fakestoreapi.com/products').then(response=>{
        this.setState({
          Arr:response.data
        })
      })
    }
    handleClick1=(ele)=>{
      alert(`Id: ${ele.id}\nTitle: ${ele.title}\nPrice: ${ele.price}\nDescription: ${ele.description}\nRating: ${ele.rating.rate}\nCount: ${ele.rating.count}`)
    }
  render() {
    return (
      <>
        <div style={{marginBottom:'90px'}}>
        <nav className="navbar navbar-expand-lg navbar-success bg-success p-3 fixed-top">
          <a className="navbar-brand text-white" href="#">
            Branded Kart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                   All Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Men's
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Women's
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Electronics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Jewelery
                </a>
              </li>
              <li className="nav-item">
                <button className="btn btn-warning" onClick={this.handleClick}>Click To See Products</button>
              </li>
            </ul>
          </div>
        </nav>
        </div>
        <div className={style.product}>
         {
          this.state.Arr.map((val)=>{
            return(
                <div className="card" style={{ width: 250 }}>
              <img className="card-img-top" src={val.image} alt="Card cap" width={'100%'} height={150}/>
              <div className="card-body">
                <h5 className="card-title">Id : {val.id}</h5>
                <p className="card-text">{val.title}
                  </p>
                <button className="btn btn-primary" onClick={()=>this.handleClick1(val)}>
                  SeeMore
                </button>
              </div>
            </div>
            )
                })
         }
        
        </div>
        <div style={{textAlign:'center',backgroundColor:'rgb(3, 143, 57)',lineHeight:5,position:'sticky',bottom:0,marginTop:'30px',color:'white'}}>
          SR Web Application @2023
        </div>
      </>
    );
  }
}
export default ProductList;