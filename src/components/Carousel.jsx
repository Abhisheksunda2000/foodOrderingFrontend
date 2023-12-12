import React from "react";

export default function Carousel() {
  const imageStyle = {
    objectFit: "cover",
    width: "100%",
    height: "500px", // Set the height as needed
  };

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" id="carousel">
        <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 text-white bg-success"
              type="submit"
            >
              Search
            </button>
          </form>
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
  );
}
