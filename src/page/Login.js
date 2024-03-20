import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Login() {
    const [userName, setUserName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
        console.log(userName);
      };
    const handEmailChange =(event) =>{
        setEmail(event.target.value);
    }
    const handlePasswordChange =(event) =>{
        setPassword(event.target.value);
    }
    const handleLogin =() =>{
        if(userName && email && password){
            navigate('/listBHYT');
        }
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

  return (
    <Box style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Box style={{
            marginTop: '200px',
            backgroundColor: '#ccc',
            width: '30%',
            height: 'auto',
            padding: '30px',
            borderRadius: '20px'
        }}>
            <Box style={{
                display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px'
            }}>
                 <Typography style={{
                    color: 'rgb(25, 118, 210)',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    }}>LOGIN</Typography>
            </Box>
            
            <Box style={{
                display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
                 <Box 
                 component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '95%' },
                        
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        placeholder="Nguyen Van A"
                        value={userName}
                        onChange={handleUsernameChange}
                        />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        placeholder="abc@gmail.com"
                        value={email}
                        onChange={handEmailChange}
                        />
                     <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handlePasswordChange}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                        </FormControl>

                    {/* <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        placeholder="enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                        /> */}
                </Box>
            </Box>

             <Box style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
             }}>
                <Box>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '30px'
                    }}>
                        <Button  
                        variant="contained" 
                        size="large"
                        onClick ={handleLogin}
                        >
                            Login
                        </Button>
                    </Box>
                    <Box style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
             }}>
                        <Typography>Not a member?</Typography>
                        <Link to="/register"
                        style={{
                            textDecoration:'none',
                        }}
                        >
                            <Button>Register</Button>
                        </Link>
                        
                    </Box>
                </Box>
             </Box>
        </Box>
     
    </Box>
  )
}
