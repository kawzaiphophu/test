import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomButton from '../component/Button/CustomButton';



export default function LoginPage() {
    const theme = useTheme();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://harnkan-api.depwhite.com/api/users/signin', {
                username,
                password
            });
            const { token } = response.data;
            localStorage.setItem('auth_token', token);
            window.location.href = '/dashboard';
        } catch (err) {
            setError('Invalid username or password');
            console.error('Login Error', err);
        }
    };

    const styles = {
        container: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary
        },
        form: {
            width: '100%',
            maxWidth: '400px',
            marginTop: '1rem'
        },
        textField: {
            backgroundColor: theme.palette.background.paper
        }
    };

    return (
        <Container sx={styles.container}>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <form style={styles.form} noValidate>
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
                    style={styles.textField}
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
                    style={styles.textField}
                />
                {error && <Typography color="error">{error}</Typography>}
                <CustomButton
                    fullWidth={true}
                    text='Login'
                    onClick={handleLogin}
                >
                </CustomButton>

            </form>
        </Container>
    );
};


