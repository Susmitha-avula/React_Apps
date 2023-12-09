import arr from "./Cards11";

import "./card13.css"
function Card12() {
  return (
    <div>
      <div className="file1">
        
          <div className="card" style={{ width: "25rem" }}>
          <img
            style={{ width: "100%", height: "150px" }}
            className="card-img-top"
            src={arr[0].image}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">Id: {arr[0].id}</p>
            <p className="card-text">Title: {arr[0].title}</p>
            <p className="card-text">Price: {arr[0].price}</p>
            <p className="card-text">Category: {arr[0].category}</p>
            <p className="card-text">Rating:{arr[0].rating.rate}</p>
            <p className="card-text">Rating Count: {arr[0].rating.count}</p>
          </div>
        </div>
        <div className="card" style={{ width: "25rem" }}>
          <img
            style={{ width: "100%", height: "150px" }}
            className="card-img-top"
            src={arr[1].image}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">Id: {arr[1].id}</p>
            <p className="card-text">Title: {arr[1].title}</p>
            <p className="card-text">Price: {arr[1].price}</p>
            <p className="card-text">Category: {arr[1].category}</p>
            <p className="card-text">Rating:{arr[1].rating.rate}</p>
            <p className="card-text">Rating Count: {arr[1].rating.count}</p>
          </div>
        </div><div className="card" style={{ width: "25rem" }}>
          <img
            style={{ width: "100%", height: "150px" }}
            className="card-img-top"
            src={arr[2].image}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">Id: {arr[2].id}</p>
            <p className="card-text">Title: {arr[2].title}</p>
            <p className="card-text">Price: {arr[2].price}</p>
            <p className="card-text">Category: {arr[2].category}</p>
            <p className="card-text">Rating:{arr[2].rating.rate}</p>
            <p className="card-text">Rating Count: {arr[2].rating.count}</p>
          </div>
        </div><div className="card" style={{ width: "25rem" }}>
          <img
            style={{ width: "100%", height: "150px" }}
            className="card-img-top"
            src={arr[3].image}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">Id: {arr[3].id}</p>
            <p className="card-text">Title: {arr[3].title}</p>
            <p className="card-text">Price: {arr[3].price}</p>
            <p className="card-text">Category: {arr[3].category}</p>
            <p className="card-text">Rating:{arr[3].rating.rate}</p>
            <p className="card-text">Rating Count: {arr[3].rating.count}</p>
          </div>
        </div><div className="card" style={{ width: "25rem" }}>
          <img
            style={{ width: "100%", height: "150px" }}
            className="card-img-top"
            src={arr[4].image}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">Id: {arr[4].id}</p>
            <p className="card-text">Title: {arr[4].title}</p>
            <p className="card-text">Price: {arr[4].price}</p>
            <p className="card-text">Category: {arr[4].category}</p>
            <p className="card-text">Rating:{arr[4].rating.rate}</p>
            <p className="card-text">Rating Count: {arr[4].rating.count}</p>
          </div>
        </div><div className="card" style={{ width: "25rem" }}>
          <img
            style={{ width: "100%", height: "150px" }}
            className="card-img-top"
            src={arr[5].image}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">Id: {arr[5].id}</p>
            <p className="card-text">Title: {arr[5].title}</p>
            <p className="card-text">Price: {arr[5].price}</p>
            <p className="card-text">Category: {arr[5].category}</p>
            <p className="card-text">Rating:{arr[5].rating.rate}</p>
            <p className="card-text">Rating Count: {arr[5].rating.count}</p>
          </div>
        </div>
        
      </div>
      {/* <h1>{obj[0]}</h1> */}
    </div>
  );
}
export default Card12;
