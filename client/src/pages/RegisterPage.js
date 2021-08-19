import React, { useEffect, useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/Actions/authActions';
import { useHistory } from 'react-router-dom';
import {Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { setError } from '../redux/Actions/appStateActions';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    input: {
        display: 'none',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function RegisterPage() {
    const classes = useStyles();
    const history = useHistory()
    const auth = useSelector(state => state.auth)
    const errors= useSelector(state => state.appStateReducer.errors)
    const dispatch = useDispatch()
  
    const [info, setInfo] = useState({
        firstname: "",
        lastname:"",
        email: '',
        password: '',
        address:'',
        PhoneNum:''
    })

    useEffect(() => {
        if (auth.isAuth) {
            history.push('/')
        }
    }, [auth.isAuth])

    const handleInfoChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register(info),history);
       dispatch(setError)

    }

    

    return (
        <Container component="main" maxWidth="xs"> 
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}  style={{backgroundColor:'#ff8000'}}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" >
                    Sign up
                </Typography>
                
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                { errors && <Alert variant="danger">{errors.password.msg}</Alert>}
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{ display: "flex", flexDirection: "column" }}>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstname"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={handleInfoChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="lname"
                                name="lastname"
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                autoFocus
                                onChange={handleInfoChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="address"
                                name="address"
                                variant="outlined"
                                required
                                fullWidth
                                id="address"
                                label="Address"
                                autoFocus
                                onChange={handleInfoChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="PhoneNum"
                                name="PhoneNum"
                                variant="outlined"
                                required
                                fullWidth
                                id="PhoneNum"
                                label="Phone Number"
                                autoFocus
                                onChange={handleInfoChange}
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleInfoChange}
                            />
                        </Grid>
                       
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleInfoChange}
                            />
                            
                        </Grid>
                    </Grid>
                    <Button
                    style={{backgroundColor:'#ff8000'}}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                        <span>user already exist <Link to="/login">Sign in</Link></span>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}