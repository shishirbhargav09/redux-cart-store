import React from "react";
import products from "../Products.json";
import { useDispatch } from 'react-redux'
import { add } from '../Store/cartSlice'
function Items() {
  const dispatch = useDispatch()
  const onclickadd= (product) => { 
    dispatch(add(product))
   }
  return (
    <div className="container d-flex flex-row flex-wrap justify-content-center">
      {products.map((product) => {
        return (
          <div
            className="card m-3 col-3 rounded shadow-lg p-3 mb-5 bg-body rounded  "
            style={{ width: "15rem" }}
            key={product.id}
          >
            <center><img src={product.image} className="card-img-top" style={{width:'130px',height:'130px'}}alt="..." /></center>
            <div className="card-body d-flex flex-column justify-content-center">
              <h5 className="card-title">{product.title.substring(0, 27)}...</h5>
              <p className="card-text text-center">
               ${product.price}
              </p>
              <button onClick={() => onclickadd(product)
                
              } className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
