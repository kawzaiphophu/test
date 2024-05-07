import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Button, Container, TextField, Typography } from '@mui/material';

const cookies = new Cookies();

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('your_api_login_endpoint', {
        username,
        password
      });
      const { token } = response.data;
      cookies.set('auth_token', token, { path: '/' });
    } catch (err) {
      setError('Invalid username or password');
      console.error('Login Error', err);
    }
  };

  return (
    <Container style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <form style={{ width: '100%', maxWidth: '400px', marginTop: '1rem' }} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: '1rem' }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
