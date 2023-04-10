import React, {useState, useContext} from 'react';
import { StateContext } from '../Context/StateContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Box, Button } from '@mui/material';
import { FormContainer, Input } from '../Styles/styledComponent';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


const VALID_PASSWORD_REGEX = /^(?=.?[A-Z])(?=.[\u0021-\u002b\u003c-\u0040])(?=.?[a-z])(?=.?[0-9]).{6,20}$/;
const VALID_ELEMENT = /^(?!\s)(\s*\S){2,}$/;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Debe ser un correo electrónico válido')
    .required('El correo electrónico es requerido')
    .matches(VALID_ELEMENT,'No puede haber espacios al inicio ni al final de este campo',),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es requerida')
  //   .matches(VALID_PASSWORD_REGEX,
  //     'La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula, un número y un carácter especial',
  //  )
});

const Login = () => {
  const [values, setValues] = useState({email: "", password: ""});
  const { dispatch } = useContext(StateContext);
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          dispatch({type: "LOGGIN", payload: values.email});
          navigate("/home");
        }, 800);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormContainer>
            <Field
              as={Input}
              size='small'
              name='email'
              type='text'
              label='E-mail'
              placeholder='Ingrese su e-mail'
              variant='outlined'
              fullWidth
            />
            <ErrorMessage name='email' />

            <Field
              as={Input}
              size='small'
              name='password'
              type='password'
              label='password'
              placeholder='Ingrese su contraseña'
              variant='outlined'
              fullWidth
            />
            <ErrorMessage name='password' />

            <Button type='submit' size='small' variant='contained' disabled={isSubmitting}>
              Ingresar
            </Button>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default Login;