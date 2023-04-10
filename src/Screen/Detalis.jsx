import React, { useEffect, useState } from 'react';

import { endpoint } from "./Home";
import dentista from "../imgs/dentista.jpg"
import { useParams, Link } from 'react-router-dom';


const Detalis = () => {
  
  const {id} = useParams();
  const [values, setValues] = useState(null);

  useEffect(()=>{
    axios.get(endpoint)
      .then(({data}) => {
        // console.log(data);
        setValues(data);
      })
      .catch((error)=>{
        console.error(error);
      })
  },[]);


  return (
    <div>
      <div>
        <p>{values?.id}</p>
        <p>{values?.name}</p>
        <p>{values?.email}</p>
        <img src={dentista} alt="dentista"/>
        <Link to="/home">Volver</Link>
      </div>
    </div>
  )
}

export default Detalis;