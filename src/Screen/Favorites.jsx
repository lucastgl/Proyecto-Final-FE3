import React, {useContext} from 'react'

import {Link} from "react-router-dom"
import dentista from "../imgs/dentista.jpg"
import { StateContext } from '../Context/StateContext'
import { Box, IconButton, Tooltip } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { HomeContainer, DentistaProfile, DentistaPic } from '../Styles/styledComponent';


const Favorites = () => {

  const {state} = useContext(StateContext);

  return (
    <main>
      <h1>Favoritos</h1>
      <HomeContainer>
        {
          state.data.map((item)=>(
            <DentistaProfile key={item.id}>
                <p>{item.name}</p>
                <DentistaPic src={dentista}/>
                <Link to={`/users/${item.login}`}>Ver mas</Link>
                <Box>
                <Tooltip title="agregar a favoritos">
                    <IconButton>
                        <FavoriteBorderIcon/>
                    </IconButton>
                </Tooltip>
                </Box>
            </DentistaProfile>
        ))}
      </HomeContainer>
    </main>
  )
}

export default Favorites;