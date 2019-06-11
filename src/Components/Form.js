import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { Formik } from 'formik';

export const Form = (props) => {

  const {
    values : {name,email,password,confirmPassword},
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched
  }=props;

  const change=(name,e) =>{
    e.persist();
    handleChange(e);
    setFieldTouched(name,true,false);
  };
  return(
    <form onSubmit={props.handleSubmit}>
    <TextField id="name" name="name" label="Name" helperText={touched.name ? errors.name :""}
    error={touched.name && Boolean(errors.name)} value={name} onChange={change.bind(null,"name")} fullWidth />

    <TextField id="email" name="email" label="Email" helperText={touched.email ? errors.email :""}
    error={touched.email && Boolean(errors.email)} value={email} onChange={change.bind(null,"email")} fullWidth />

    <TextField id="password" name="password" label="Password" helperText={touched.password ? errors.password :""}
    error={touched.password && Boolean(errors.password)} value={password} onChange={change.bind(null,"password")} fullWidth />

    <TextField id="confirmPassword" name="confirmPassword" label="Confirm Password" helperText={touched.confirmPassword ? errors.confirmPassword :""}
    error={touched.confirmPassword && Boolean(errors.confirmPassword)} value={confirmPassword} onChange={change.bind(null,"confirmPassword")} fullWidth />


     <Button type="submit" fullWidth variant="raised" color="primary" disabled={!isValid}>Submit</Button>
     </form>
  );
};
export default Form;
