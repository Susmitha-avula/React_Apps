import axios from "axios";
import { Component } from "react";
import styles from '../01-12-23/ProductList.module.css'
class ProductFetch extends Component {
  state = {
    Arr: [],
  };
  handleClick = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.setState({
        Arr: response.data,
      });
    });
  };
  render() {
    return (
      <>
        <button className="btn btn-success" onClick={this.handleClick}>
          Click Here to See Products
        </button>
        <div className={styles.product}>
        {this.state.Arr.length>0 &&
            this.state.Arr.map((val)=>{
                return(
                    <div className="card" style={{ width: 250 }}>
                  <img className="card-img-top" src={val.image} alt="Card cap" width={'100%'} height={150}/>
                  <div className="card-body">
                    <h5 className="card-title">Id : {val.id}</h5>
                    <p className="card-text">{val.title}
                      </p>
                    <button className="btn btn-primary" onClick={()=>this.handleClick(val)}>
                      SeeMore
                    </button>
                  </div>
                </div>
                )
                    })  
        }
        </div>
      </>
    );
  }
}
export default ProductFetch;
