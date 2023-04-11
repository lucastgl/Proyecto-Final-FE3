import React, { useEffect, useState } from 'react';

import axios from "axios";
import { endpoint } from "./Home";
import dentista from "../imgs/dentista.jpg"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
        <div>
          <Tooltip title="Cerrar sesión">
            <IconButton onClick={()=> navigate(-1)}>
              <ArrowBackIcon size={30} style={{color: "white"}}/>
            </IconButton>
          </Tooltip>
          <img src={dentista} alt="dentista"/>
        </div>
        <div>
          <p>{values?.name}</p>
          <p>{values?.email}</p>
          <p>{values?.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default Detalis;