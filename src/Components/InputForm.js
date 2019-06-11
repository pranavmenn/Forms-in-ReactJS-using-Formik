import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./Form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
  password: Yup.string("").min(8,"Password must contain at least 8 characters").required("Enter your Password"),
  confirmPassword: Yup.string("Enter your password").required("Confirm your password").oneOf([Yup.ref("password")], "Password does not match")
})

 paper: {
   marginTop: theme.spacing.unit * 8,
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
     .spacing.unit * 5}px`
 },
 container: {
   maxWidth: "200px"
 }
});

class InputForm extends Component{

  constructor(props){
    super(props);

  }

submitValues = ({name,email,confirmPassword,password}) => {
  console.log({name,email,confirmPassword,password});
};
  render(){
    const classes=this.props;
    const values={name:"",email:"",confirmPassword:"",password:""};
    return(
      <div>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <h1>Register</h1>
            <Formik render={props =><Form {...props} />} initialValues={values} validationSchema={validationSchema} onSubmit={this.submitValues}/>
          </Paper>
        </div>
      </div>

    );
  }
}

export default withStyles(styles)(InputForm);
