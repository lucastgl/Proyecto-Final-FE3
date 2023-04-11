import React, {Fragment, useContext} from 'react'

import { Outlet, useNavigate } from 'react-router-dom';
import { StateContext } from "../../Context/StateContext";
import {Box, IconButton, Tooltip, Typography} from "@mui/material"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { NavElement } from "../../Styles/styledComponent"


const Navbar = () => {
  const {state, dispatch} = useContext(StateContext);
  const navigate = useNavigate();

  return (
      <Fragment>
          <Box component="header" style={{display: "flex", justifyContent: "space-between", marginBottom: "20px", backgroundColor: "#3e4653"}}>
                <ul style={{display: "flex", gap: "20px"}}>
                    <NavElement onClick={() => navigate("/home")} >Home</NavElement>
                    <NavElement onClick={() => navigate("/favorites")} >Favoritos</NavElement>
                    <NavElement onClick={() => navigate("/contact")} >Contact</NavElement>
                </ul>
                <Tooltip title="Cerrar sesión">
                    <IconButton onClick={() => dispatch({type: "LOGOUT" /*No usamos el payload ya que solo es obligatorio mientras se utilice*/})}>
                            <Typography style={{color: "white", marginRight: "10px"}} variant='body2'>{state?.user}</Typography>
                            <ExitToAppIcon size={30} style={{color: "white"}}/>
                    </IconButton>
                </Tooltip>
          </Box>
          <Outlet/>
      </Fragment>
  )
}

export default Navbar;