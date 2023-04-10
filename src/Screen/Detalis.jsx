import React, { useEffect, useState, useNavigate } from 'react';

import axios from "axios";
import { endpoint } from "./Home";
import dentista from "../imgs/dentista.jpg"
import { useParams, Link } from 'react-router-dom';


const Detalis = () => {
  
  const {id} = useParams();
  const [values, setValues] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`${endpoint}/${id}`)
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
        <p>{values?.name}</p>
        <p>{values?.email}</p>
        <img src={dentista} alt="dentista"/>
        <button onClick={()=> navigate(-1)}>Volver con navigate</button>
        <Link to="/home">Volver</Link>
      </div>
    </div>
  )
}

export default Detalis;