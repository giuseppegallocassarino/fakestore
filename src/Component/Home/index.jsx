import React from 'react'
import useFetch from "use-http";
import style from "./Home.module.scss"

function Todos() {
    const options = {} // these options accept all native fetch options
    // the last argument below [] means it will fire onMount (GET by default)
    const {data = [] } = useFetch('https://fakestoreapi.com/products', options, [])
    return (
        <div>
            {data.map(data => (<div key={data.id}>
                <div className={style.form}>
                    <h3>{data.title}</h3>
                    <h4>{data.price} </h4>
                    <p>{data.description}</p>
                    <img src={data.image} alt="im" />
                    <p>{data.rating.rate}</p>
                    <small>{data.rating.count}</small>
                    </div>
                    </div>))}
        </div>
    )
 }

 export default Todos