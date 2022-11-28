import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../Store/cartSlice'

function Cart() {
  const products = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const removehandler = (productid) => { 
    dispatch(remove(productid));
   }
  return (
    <div style={{paddingTop: '10rem'}}>
    <center><h3>Items in Your Cart</h3></center>
    {products.map((product) => { 
      return <div className='container'>
      <div className="card mb-3" style={{Width: '60%'}}>
  <div className="row g-0">
    <div className="col-sm-4">
     <center> <img src={product.image} style={{Width: '100px', height:'100px'}} className="img-fluid rounded-start" alt="..."/></center>
    </div>
    <div className="col-sm-4">
      <div className="card-body text-center">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        </div>
        
      </div>
      <div className="col-sm-4 d-flex align-items-center justify-content-center">
      <button onClick={()=>removehandler(product.id)} className="btn btn-danger" style={{height:'40px'}}>Remove</button>
        
      </div>
      
    
  </div>
</div>
    </div>
     })}
    </div>
  )
}

export default Cart