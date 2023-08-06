import React from "react";
// import { Link } from "react-router-dom";

export default function Category(props) {
 
  return (
    <>
      <div className="container">
        <div className="categories d-flex justify-content-center">

          <div className="category d-flex">

              <button type="button" class="btn btn-outline-secondary mx-1">
             <div className="categoryItems mx-2"
              onClick={() => {
                  props.setValue("");
                }}>
            
              <p className="categoryList">All</p>
              </div>
                  </button>
                  <button type="button" class="btn btn-outline-secondary mx-1">
            <div
              className="categoryItems mx-2"
              onClick={() => {
                props.setValue("/category/smartphones");
              }}
            >
              <p className="categoryList">Electronics</p>
            </div>
            </button>
            <button type="button" class="btn btn-outline-secondary mx-1">
            <div
              className="categoryItems mx-2"
              onClick={() => {
                props.setValue("/category/laptops");
              }}
            >
              <p className="categoryList mx-2">Men's</p>
            </div>
            </button>
            <button type="button" class="btn btn-outline-secondary mx-1">
            <div
              className="categoryItems mx-2"
              onClick={() => {
                props.setValue("/category/fragrances");
              }}
            >
              <p className="categoryList">Jewelery</p>
            </div>
            </button>
            <button type="button" class="btn btn-outline-secondary mx-1">
            <div
              className="categoryItems mx-2"
              onClick={() => {
                props.setValue("/category/skincare");
              }}
            >
              <p className="categoryList mx-2">Electronics</p>
            </div>
            </button>
            <button type="button" class="btn btn-outline-secondary mx-1">
            <div
              className="categoryItems mx-2"
              onClick={() => {
                props.setValue("/category/groceries");
              }}
            >
              <p className="categoryList">Women's</p>
            </div>
            </button>
          </div>
        </div>
{/* .............................................................................. */}
           
      </div>
    </>
  );
}