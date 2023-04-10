import React, { useState, useContext } from 'react'

import { Button, Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../Context/StateContext';


const Login = () => {

  const [values, setValues] = useState({email: "", password: ""});
  const { dispatch } = useContext(StateContext);
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch({type: "LOGGIN", payload: values.email});
    navigate("/home");
  }

  return (
    <div>
      <Box 
        component="form" 
        onSubmit={handleSubmit}
      >

        <TextField 
          name='email'
          size='small'
          type="text"
          label="E-mail"
          placeholder='Ingrese su e-mail'
          value={values.email}
          onChange={(e) => setValues({...values, email: e.target.value})}
        />

        <TextField 
          name='password'
          size='small'
          type="password"
          label="password"
          placeholder='Ingrese su contraseña'
          value={values.password}
          onChange={(e) => setValues({...values, password: e.target.value})}
        />
        
        <Button type='submit' size="small" variant="contained">
          Ingresar
        </Button>
      
      </Box>
    </div>
  )
}

export default Login