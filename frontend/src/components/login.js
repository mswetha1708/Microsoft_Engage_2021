import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useHistory } from "react-router-dom";
import Axios from 'axios';

const Login = ({ handleChange }) => {
    const history = useHistory();
    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#1b3ebd' }
    const btnstyle = { margin: '8px 0' }
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }

    const [username, setUsernameReg] = React.useState("");
    const [password, setPasswordReg] = React.useState("");

    const login = () => {
      Axios.post('http://localhost:3001/login',{
        username: username,
        password: password,
      }).then((response ) => {
        localStorage.setItem('Email',response.data[0].Email)
        const token = localStorage.getItem('Email')
        console.log("Hi")
        console.log(token)
        console.log(response)
        history.push("/dashboard");
      });
    };

    const onSubmit = (values, props) => {
        console.log(values)
//        setTimeout(() => {
//            props.resetForm()
//            props.setSubmitting(false)
//        }, 2000)

    }

    const onChangeUsername = (e) => {
    setUsernameReg(e.target.value)
    }

    const onChangePassword = (e) => {
    setPasswordReg(e.target.value)
    }

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues}  onSubmit={onSubmit} >
                    {(props ) => (
                        <Form>
                            <Field as={TextField} label='Username(email)' name="username"
                                placeholder='Enter username' fullWidth required variant="standard" 
                                helperText={<ErrorMessage name="username" />}  value = {username} onChange={onChangeUsername}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required variant="standard" 
                                helperText={<ErrorMessage name="password" />}   value = {password} onChange={onChangePassword}
                            />
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle}  onClick={login} fullWidth>{props.isSubmitting ? "Loading" : "Sign in"}</Button>

                        </Form>
                    )}
                </Formik>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={() => handleChange("event", 1)} >
                        Sign Up
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login