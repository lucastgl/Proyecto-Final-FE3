import React, {useState, useEffect} from 'react'
import { HomeContainer, DentistaProfile, DentistaPic } from '../Styles/styledComponent';
import dentista from "../imgs/dentista.jpg"
import { Link } from 'react-router-dom';
import axios from "axios";

export const endpoint = "https://jsonplaceholder.typicode.com/users";

const Home = () => {

  const [values, setValues] = useState(null);

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
            <Link to={`/detail/${item.name}`}>Ver mas</Link>
          </DentistaProfile>
      ))}
    </HomeContainer>
  )
}

export default Home;