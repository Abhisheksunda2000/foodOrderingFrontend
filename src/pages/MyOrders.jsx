import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    try {
      const res = await fetch("/api/v1/orders/order-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const response = await res.json();
      const responseData = response.data || [];
      setOrderData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
  <div className="row">
    {
      orderData.length !== 0 ? (
        orderData.map((itemArray, index) => (
          <div key={index} className="col-12">
            {
              itemArray.map((itemInside, insideIndex) => (
                <div key={insideIndex} className="mb-3">
                  {itemInside.orderDate && (
                    <div className="m-auto mt-5">
                      {itemInside.orderDate}
                      <hr />
                    </div>
                  )}
                  <div className="row">
                    {itemInside.id && (
                      <div key={itemInside.id} className="col-12 col-md-6 col-lg-4">
                        <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                          <img src={itemInside.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                          <div className="card-body">
                            <h5 className="card-title">{itemInside.name}</h5>
                            <div className="container w-100 p-0" style={{ height: "38px" }}>
                              <span className="m-1">{itemInside.qty}</span>
                              <span className="m-1">{itemInside.size}</span>
                              <div className="d-inline ms-2 h-100 w-20 fs-5">
                                ₹{itemInside.price}/-
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            }
          </div>
        ))
      ) : (
        "No Order History"
      )
    }
  </div>
</div>

      <Footer />
    </div>
  );
}
