import React, { useEffect, useState } from 'react';

import axios from "axios";
import { endpoint } from "./Home";
import dentista from "../imgs/dentista.jpg"
import {  IconButton, Tooltip } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DentistaPic } from '../Styles/styledComponent';

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
    <div style={{height: "80vh"}}>
      <div style={{display: "flex", width: "30%"}}>
        <div>
          <Tooltip title="Volver">
            <IconButton onClick={()=> navigate(-1)}>
              <ArrowBackIcon size={30} style={{color: "white"}}/>
            </IconButton>
          </Tooltip>
          <DentistaPic src={dentista} alt="dentista"/>
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