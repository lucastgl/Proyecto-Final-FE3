import { Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const StyledLink = styled(Link)`
    margin: 0px 20px;
    text-decoration: none;
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: center;    
`;

export const DentistaProfile = styled.div`
    margin: 30px;
    width: 20%;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #005353;
    border: 3px solid white;
    border-radius: 10px;
    box-shadow: 4px 10px 18px -7px rgba(255,255,255,1);
`;

export const DentistaPic = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 10px;
`;

export const FormContainer = styled(Box)`
    
    @property --rotate {
        syntax: "<angle>";
        initial-value: 132deg;
        inherits: false;
    }
    
    background: #808bb1;
    width: 450px;
    height: 60vh;
    padding: 3px;
    position: relative;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    color: white;
    
    &::before {
        content: "";
        width: 104%;
        height: 102%;
        border-radius: 8px;
        background-image: linear-gradient(
        var(--rotate)
        , #5ddcff, #3c67e3 43%, #4e00c2);
        position: absolute;
        z-index: -1;
        top: -1%;
        left: -2%;
        animation: spin 2.5s linear infinite;
    }
  
    &::after {
        position: absolute;
        content: "";
        top: 10vh;
        left: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        transform: scale(0.8);
        filter: blur(15vh);
        background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
        opacity: 1;
        transition: opacity .5s;
        animation: spin 2.5s linear infinite;
    }
  
    @keyframes spin {
        0% {
        --rotate: 0deg;
        }
        100% {
        --rotate: 360deg;
    }
`;

export const Input = styled(Field)`
  margin: 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #4E6E81;
  color: white;
  height: 40px;
  width: 300px;

  ::placeholder {
    color: white;
    opacity: 0.3;
  }

  input {
    color: white;
  }
  /* Agrega estas reglas */
  &.Mui-error .MuiInputBase-input {
    color: red;
  }

  &.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: red;
  }
`;

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const FormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const NavElement = styled.li`
  list-style-type: none;
  color: #ccc; 
  font-weight: bold;
  cursor: pointer; 
  &:hover {
    color: #fff; 
    text-decoration: underline; 
    text-decoration-color: #fff;
    text-underline-position: under; 
    text-decoration-thickness: 2px; 
  }
`;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200xp;
  background-color: #3e4653; 

  p {
    color: white;
    margin-right: 20px;
  }

  img {
    width: 7%;
    height: auto;
  }
`;