import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState('');

  const loadData = async () => {
    try {
      let response = await fetch("/api/v1/foods/get-foodItems", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      response = await response.json();
      setFoodItem(response.data.foodItems);
      setFoodCat(response.data.foodCategory);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const imageStyle = {
    objectFit: "fill",
    width: "100%",
    height: "500px", // Set the height as needed
  };

  return (
    <>
      <Navbar />
      <div>
      <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" id="carousel">
        <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
          <div className="d-flex justify-content-center">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value = {search}
              onChange = {(e)=>{setSearch(e.target.value)}}
            />
          </div>
        </div>

        <div className="carousel-item active">
          <img
            src="https://source.unsplash.com/random/900x500/?burger"
            className="d-block w-100 img-fluid"
            style={{ filter: "brightness(30%)", imageStyle }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/900x500/?pastry"
            className="d-block w-100 img-fluid"
            style={{ filter: "brightness(30%)", imageStyle }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/900x500/?barbeque"
            className="d-block w-100 img-fluid"
            style={{ filter: "brightness(30%)", imageStyle }}
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </div>

      <div className="container">
        {foodCat.length !== 0 ? (
          foodCat.map((category) => {
            const filteredItems = foodItem.filter(
              (item) => (item.CategoryName === category.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))
            );

            return (
              <div key={category._id} className="mb-3">
                <h3 className="fs-3 m-3">{category.CategoryName}</h3>
                <hr></hr>
                <div className="row">
                  {filteredItems.length !== 0 ? (
                    filteredItems.map((filteredItem) => (
                      <div
                        key={filteredItem._id}
                        className="col-12 col-md-6 col-lg-3"
                      >
                        <Card item = {filteredItem} />
                      </div>
                    ))
                  ) : (
                    <div className="col-12">
                      <p>No Food Items Found</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div>No Categories Found</div>
        )}
      </div>
      <Footer />
    </>
  );
}
