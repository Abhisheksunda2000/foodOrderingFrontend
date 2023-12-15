import React from "react";

export default function Card({item}) {
  let options = item.options;
  console.log(options);
  let priceOptions = Object.keys(options[0]); 
  
  return (
    <div className="card mt-3" style={{ width: "19rem", maxHeight: "500px" }}>
      <img src={item.img} className="card-img-top" alt="..." style={{ minHeight:"200px" ,maxHeight:"200px" }}/>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">
          {item.description}
        </p>
        <div className="container w-100">
          <select className="m-2 h-100 bg-success rounded">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>

          <select className="m-2 h-100 bg-success rounded">
            {
              priceOptions.map((data)=>{
                console.log(data);
                return <option key={data} value={data}> {data} </option>
              })
            }
          </select>

          <div className="d-inline h-100 fs-7">Total Price</div>
        </div>
      </div>
    </div>
  );
}
