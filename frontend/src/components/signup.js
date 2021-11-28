import React, { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import Box from '@mui/material/Box';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput'
import Axios from 'axios';
import * as Yup from "yup";
export class SignUp extends React.Component {
  constructor() {
  super();
  this.state = {
 full_name: "", username: "", password: "",year: "",dept: ""
 }
    this.onSubmit = this.onSubmit.bind(this)
  }
  handleInputChange = (field, value) => {
  console.log(value)
    this.setState({
      [field]: value,
    });
  };


  onSubmit(e) {
        e.preventDefault()

    const newUser = {
        full_name: this.state.full_name,
        username: this.state.username,
        password: this.state.password,
        year: this.state.year,
        dept: this.state.dept
    }
        console.log("Hi")
        console.log(newUser);
      Axios.post('http://localhost:3001/register',
        newUser
      ).then((response ) => {
        console.log(response);
      });
//    setTimeout(() => {
//        props.resetForm()
//        props.setSubmitting(false)
//    }, 2000)
    }
    render(){
    const paperStyle = {padding :20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1b3ebd' }
    const marginTop = { marginTop: 5 }
    const top = {display: 'flex', flexDirection: 'row'}
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" variant="standard" name="full_name"  value = {this.state.full_name}  onChange={(e) =>this.handleInputChange('full_name', e.target.value)} />
                    <TextField fullWidth label='Email' placeholder="Enter your email" variant="standard" name="username"  value = {this.state.username} onChange={(e) =>this.handleInputChange('username', e.target.value)} />
                    <TextField fullWidth label='Password' placeholder="Enter your password" type='password' variant="standard" name="password"  value = {this.state.password} onChange={(e) =>this.handleInputChange('password', e.target.value)} />
                    <FormControl fullWidth>
                                        <InputLabel htmlFor="Branch">Year</InputLabel>
                                        <Select
                                        onChange={(e) =>this.handleInputChange('year', e.target.value)}
                                        >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        </Select>
                                      </FormControl>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="Branch">Department</InputLabel>
                    <Select
                      onChange={(e) =>this.handleInputChange('dept', e.target.value)}
                    >
                    <MenuItem value="Computer Science">Computer Science</MenuItem>
                    <MenuItem value="Electrical and Electronics">Electrical and Electronics</MenuItem>
                    <MenuItem value="Mechanical">Mechanical</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                      control={<Checkbox name="checkedA" />}
                      label="I accept the terms and conditions."
                  />
                  <Button type='submit' fullWidth variant='contained' color='primary' onClick={this.onSubmit} >Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
  }
}

export default SignUp;