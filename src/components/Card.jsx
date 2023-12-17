import React, { useEffect, useRef, useState } from "react";
import {useCart, useDispatchCart} from "./ContextReducer";

export default function Card({item}) {
  let options = item.options;
  let priceOptions = Object.keys(options[0]); 
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();

  const [qty, setQty] = useState(1);
  const [size,setSize] = useState("");

  let finalPrice = qty * parseInt(options[0][size]);

  const handleAddToCart = async () => {

      let food = [];
      for(const i of data){
        if(i.id === item._id){
          food = i;
          break;
        }
      }

      if(food.length !== 0){
        if(food.size === size){
          await dispatch({type:"UPDATE", id:item._id, price:finalPrice, qty:qty})
          return
        }else if(food.size !== size){
          await dispatch({type:"ADD", id: item._id, name: item.name, price: finalPrice, qty: qty, size : size});
          console.log("Size different so simply ADD one more to the list")
          return;
        }
        return; 
      }
      await dispatch({type:"ADD", id: item._id, name: item.name, price: finalPrice, qty: qty, size : size});
  }


  useEffect(() => {
    setSize(priceRef.current.value)
  }, []);
  
  return (
    <div className="card mt-3" style={{ width: "19rem", maxHeight: "500px" }}>
      <img src={item.img} className="card-img-top" alt="..." style={{ height:"200px", objectFit:"fill" }}/>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">
          {item.description}
        </p>
        <div className="container w-100">

          <select className="m-2 h-100 bg-success rounded" onChange={(e) => setQty(e.target.value)}>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>

          <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => {
          setSize(e.target.value);
            }}
          >
            {
              priceOptions.map((data)=>{
                console.log(data);
                return <option key={data} value={data}> {data} </option>
              })
            }
          </select>

          <div className="d-inline h-100 fs-7">₹{finalPrice}/-</div>
          <hr></hr>
          <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
