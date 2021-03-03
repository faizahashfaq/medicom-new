import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
//import Box from '@material-ui/core/Box'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState } from "react";
import {Link, Redirect} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    fetch(`http://127.0.0.1:5000/api/users`)
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then(function (responseData) {
        responseData.forEach((user)=>{
          if(user.email === email && user.password === password){
            localStorage.setItem("user", JSON.stringify(user))
            
          }
        })
      })
      .then(()=> (<Redirect to="/" />))
      .catch((err) => console.log(err));
  }
 
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user);
  return (
    
    <div>
      {user? <Redirect to="/" />:
      
      <Container component='main' maxWidth='xs'>
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form onSubmit={onSubmit} className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='email'
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
             
              className={classes.submit}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='/signup' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
                <Link href='/adminlogin' variant='body2'>
                  {"Are you an admin? Goto Admin loginpage."}
                </Link>
              </Grid>
            </Grid>
            {}
          </form>
        </div>
      </Container>
    }
    </div>
  
  );
};
export default LoginPage;
