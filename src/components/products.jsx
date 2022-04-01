
import React from "react";
import { useEffect } from "react";
import { useState } from "react";


export const Products = () => {

    const [products, setproducts] = useState([])
    const [filter, setFilter] = useState([]);
    const [data,setData]= useState([])
    let componentMounted = true;

    const getData = async () => {
        const response = await fetch("https://movie-fake-server.herokuapp.com/products");
        if (componentMounted) {
            setproducts(await response.clone().json())
            setFilter(await response.json())
            console.log(filter)
        }
        return () => {
            componentMounted = false
        }

    }
    const hanldeclick = async(id)=>{
        
        const response = await fetch(`https://movie-fake-server.herokuapp.com/products?id=${id}`);
        setData(await response.json())
        console.log(data)
        return(
            <>
                {data.id}
            </>
        )
    }

    useEffect(() => {
        getData()
    },[])
    const Showproducts = () => {
        return (
            <>
                {
                    filter.map((items) => {
                        let {id,brand,title,image,cat,price} = items
                        return (
                            <>
                                <div className="col-10 col-md-4 mt-5" key={id}>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <p className="card-text">{brand}</p>
                                            <p className="card-text">Rs.{price}</p>
                                            <a className="btn btn-primary" onClick={()=>hanldeclick(id)}>Add to cart</a>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }

            </>
        )
    }
    const sortData1=()=>{
            const data1 = products.sort((a,b)=>a.price-b.price)
            setFilter(data1)

    }
    const sortData2=()=>{
        const data2 = products.sort((a,b)=>b.price-a.price)
            setFilter(data2)
            
    }
    

    const SortFunction = ()=>{
        return(
            <>
                <div className="buttons">
                    <div>Sort By price</div>
                    <button className="btn btn-outline-dark me-2" onClick={()=>{sortData1()}}>Low to High</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>{sortData2()}}>high to Low</button>
                </div>
            </>
        )
    }
    return (
        <>
            <h2>All products</h2>
            <div className="continer-fluid mt-5">
                <div className="row text-centre">
                    <SortFunction/>
                    <Showproducts/>

                </div>
            </div>


        </>
    )
}