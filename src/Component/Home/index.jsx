import React from 'react'
import useFetch from "use-http";
import style from "./Home.module.scss"

function Todos() {
    const options = {} // these options accept all native fetch options
    // the last argument below [] means it will fire onMount (GET by default)
    const {data = [] } = useFetch('https://fakestoreapi.com/products', options, [])
    return (
        <div className={style.wrap}>
            {data.map(data => (<div key={data.id}>
                <div className={style.product}>
                    <h3>{data.title}</h3>
                    <h4>{data.price} $ </h4>
                    
                    <img src={data.image} alt="im" />
                    
                    </div>
                    </div>))}
        </div>
    )
 }

 export default Todos