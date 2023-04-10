import React, {useState, useContext} from 'react';
import { StateContext } from '../Context/StateContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Box, Button } from '@mui/material';
import { FormContainer, Input } from '../Styles/styledComponent';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

//const VALID_PASSWORD_REGEX = /^(?=.?[A-Z])(?=.[\u0021-\u002b\u003c-\u0040])(?=.?[a-z])(?=.?[0-9]).{6,20}$/;
const VALID_ELEMENT = /^(?!\s)(\s*\S){2,}$/;
const VALID_NUMBER = /^[+][1-9]{1,3}[0-9]{7,14}$/




const ContactSchema = Yup.object().shape({
  nombre: Yup.string()
    .required('El nombre es requerido')
    .matches(VALID_ELEMENT,'No puede haber espacios al inicio ni al final de este campo',),
    email: Yup.string()
    .email('Sin espacios al principio ni al final')
    .required('El correo electrónico es requerido')
    .matches(VALID_ELEMENT,
      'Sin espacios al principio ni al final',
   ),
  telefono: Yup.string()
    .required('El telefono es requerido')
    .matches(VALID_NUMBER,"El número de teléfono debe ser válido.",)
});

const Contact = () => {
  const [values, setValues] = useState({nombre: "", email: "", telefono: ""});
  const { dispatch } = useContext(StateContext);
  const navigate = useNavigate();


  return (
    <Formik
      initialValues={{ nombre: '', email: '', telefono: "" }}
      validationSchema={ContactSchema}
      onSubmit={(values, { setSubmitting }) => {
        
        setTimeout(() => {
          const mensaje = `Gracias por elegirnos, en breve nos estaremos comunicando con usted ${values.nombre} a su correo ${values.email}.`
          setSubmitting(false);
          alert(mensaje)
        }, 800);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormContainer>
            <Field
              as={Input}
              size='small'
              name='nombre'
              type='text'
              label='nombre'
              placeholder='Ingrese su nombre'
              variant='outlined'
              fullWidth
            />
            <ErrorMessage name='nombre' />

            <Field
              as={Input}
              size='small'
              name='email'
              type='text'
              label='email'
              placeholder='Ingrese su email'
              variant='outlined'
              fullWidth
            />
            <ErrorMessage name='email' />

            <Field
              as={Input}
              size='small'
              name='telefono'
              type='text'
              label='telefono'
              placeholder='Ingrese su telefono'
              variant='outlined'
              fullWidth
            />
            <ErrorMessage name='telefono' />

            <Button type='submit' size='small' variant='contained' disabled={isSubmitting}>
              Ingresar
            </Button>
          </FormContainer>
        </Form>
      )}
    </Formik>
  )
}



export default Contact;