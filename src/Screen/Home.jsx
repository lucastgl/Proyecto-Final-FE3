import React, {useState, useEffect, useContext} from 'react'

import { Link } from 'react-router-dom';
import { StateContext } from '../Context/StateContext';
import { Box, IconButton, Tooltip } from '@mui/material';
import { HomeContainer, DentistaProfile, DentistaPic } from '../Styles/styledComponent';

import axios from "axios";
import dentista from "../imgs/dentista.jpg"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const endpoint = "https://jsonplaceholder.typicode.com/users";

const Home = () => {

  const [values, setValues] = useState(null);
  const { dispatch } = useContext(StateContext);


  useEffect(()=>{
    axios.get(endpoint)
      .then(({data}) => {
        console.log(data);
        setValues(data);
      })
      .catch((error)=>{
        console.error(error);
      })
  },[]);

  return (
    <HomeContainer>
      {
        values?.map((item)=>(
          <DentistaProfile key={item.id}>
            <p>{item.name}</p>
            <DentistaPic src={dentista} alt="dentista"/>
            <Link to={`/users/${item.id}`}>Ver mas</Link>
            <Box>
              <Tooltip title="agregar a favoritos">
                <IconButton onClick={()=> dispatch({type: "FAVS", payload: item})}>
                  <FavoriteBorderIcon/>
                </IconButton>
              </Tooltip>
            </Box>
          </DentistaProfile>
      ))}
    </HomeContainer>
  )
}

export default Home;