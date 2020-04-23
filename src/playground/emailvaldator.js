import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import '../styles/components/_emailvaldator.scss';
import { Formik } from "formik";
import * as Yup from "yup";
//youtube https://blog.logrocket.com/building-better-react-forms-with-formik/
const andy = (

      
        <div className="my">
            <Formik  initialvalues = {
                    {
                      name: '',
                      email: '',
                      acceptedTerms: false,
                      specialPower: ''
                  
                    }

                }
                validationSchema = {Yup.object({
                    name: Yup.string()
                        .min(3, 'must be at least 3 characters')
                        .max(15, 'must be 15 characters or less')
                        .required ('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required ('Required'),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneof([true], 'you must accept the terms and conditions'),
                    specialPower: Yup.string()
                        .oneof(['flight', 'invisiblity', 'wealthy bat guy', 'other'], 'Invalid specialPower')
                        .required('Required')
                })}
                onSubmit= {(value, {setSubmitting , resetForm}) => {

                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false)
                    }, 3000)}
                }
            
                >
                
            
            </Formik>
            
        </div>
    
)

   


ReactDOM.render( andy , document.getElementById('app'))