// LoginPage.js
import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill out both fields');
    } else {
      // Handle login logic here, for example, send data to an API
      console.log('Logging in with', { email, password });
      setError('');

      if(email==='admin@incedoinc.com' && password==='admin'){
        navigate('/admin');
        return;
      }
      async function onLogin(){
        try{
            let token = window.btoa(email + ':' + password);
            const response = await axios.get('http://localhost:8181/user/login',
                {
                    headers:{
                        'Authorization':'Basic ' + token
                    }
                });

                let user = response.data;
                console.log(user);
                localStorage.setItem('username',email.split('@')[0]);
                localStorage.setItem('token',token);
                localStorage.setItem('isLoggedIn','true');
                processRole(user.role);
                
        }catch(err){
            console.log("error",err);
        }            
      }
      onLogin();
    }
  };

  const processRole = (role)=>{
    switch(role){
        case 'SUPPLIER':
            navigate('/supplier');
            break;
        default:
            setError('UnAuthorized. Contact Admin');
            break;
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 3,
          boxShadow: 3,
          borderRadius: 1,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
