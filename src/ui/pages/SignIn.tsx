import FormControlLabel from '@mui/material/FormControlLabel';
import {
  Grid,
  Box,
  Checkbox,
  Button,
  Avatar,
  Typography,
  TextField,
  Container,
} from '@mui/material/';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import Cookie from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthUserStore } from '../../store/user';
import { useSnackbarDisplay } from '../../store/snackbarDisplay';
import { useState } from 'react';
import validator from 'validator';

export default function SignIn() {
  const user = useAuthUserStore();
  const snackbarStore = useSnackbarDisplay();

  const navigate = useNavigate();

  const handleSubmit = async (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await axios.post('http://localhost:3000/login', {
      email: data.get('email'),
      password: data.get('password'),
    });

    console.log(response);

    if (response.data.success) {
      user.setAuthUser(response.data.data.user);
      user.setToken(response.data.data.token);
      Cookie.set('jwt', response.data.data.token);

      snackbarStore.setSnackbar(true, 'You are logged in', 'success');

      navigate('/profile');
    } else {
      console.log('Invalid email or password');

      snackbarStore.setSnackbar(true, 'Invalid email or password', 'error');
    }
  };

  const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            error={!validator.isEmail(email)}
            helperText={'Invalid email'}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to={'/*'}>{'Forgot you password?'}</Link>
            </Grid>
            <Grid item>
              <Link to={'/signup'}>{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
