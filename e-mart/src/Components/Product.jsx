import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import {NavLink} from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(data);
  const [loading, setLoading] = useState(false);

  let componetDidMount = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componetDidMount) {
        setData(await response.clone().json());
        setFiltered(await response.json());
        setLoading(false);
        console.log(filtered);
      }
      return () => {
        componetDidMount = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>
    <div className = "col-md-3">
        <Skeleton  height={350}/>
    </div>
    <div className = "col-md-3">
        <Skeleton  height={350}/>
    </div>
    <div className = "col-md-3">
        <Skeleton  height={350}/>
    </div>
    <div className = "col-md-3">
        <Skeleton  height={350}/>
    </div>
    </>;
  };

  const filteredProduct = (cat) => {
      const updatedList = data.filter((x)=> x.category === cat);
      setFiltered(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => {
              setFiltered(data);
          }}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => {
              filteredProduct("men's clothing");
          }}>Men's clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => {
              filteredProduct("women's clothing");
          }}>
            Women's clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => {
              filteredProduct("jewelery");
          }}>Jewellery</button>
          <button className="btn btn-outline-dark me-2" onClick={() => {
              filteredProduct("electronics");
          }}>Electronics</button>
        </div>
        {filtered.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                  <div className="card-body">
                    <h5 className="card-title">{product.title.substring(0,12)}</h5>
                    <p className="card-textlead fw-bold">
                      ${product.price}
                    </p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col 12 mb-5">
            <h1 className="display-6 fw-bolder text-center">LATEST PRODUCTS</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Product;
