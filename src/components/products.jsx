import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";


export const Products = () => {

    const [products, setproducts] = useState([])
    const getData = async () => {
        const response = await fetch("https://movie-fake-server.herokuapp.com/products");
        setproducts(await response.json())


    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h2>All products</h2>
            <div className="continer-fluid mt-5">
                <div className="row text-centre">
                        {
                            products.map((items) => {
                                return (
                                    <>
                                        <div className="col-10 col-md-4 mt-5">
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src={items.image} className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title">{items.title}</h5>
                                                    <p className="card-text">{items.brand}</p>
                                                    <a href="#" className="btn btn-primary">Add to cart</a>
                                                </div>
                                        </div>
                                        </div>

                                    </>
                                )
                            })
                        }
                    
                </div>
            </div>


        </>
    )
}