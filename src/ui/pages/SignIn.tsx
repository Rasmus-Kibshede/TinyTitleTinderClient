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
import { login } from '../../paths/urls';

export default function SignIn() {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);

  const user = useAuthUserStore();

  const snackbarStore = useSnackbarDisplay();
  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    setIsValidPassword(!validator.isStrongPassword(password));
  };

  const validateEmail = (email: string) => {
    setIsValidEmail(!validator.isEmail(email));
  };

  const handleSubmit = async (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await axios
      .post(login, {
        email: data.get('email'),
        password: data.get('password'),
      })
      .then((res) => {
        if (res.data.success) {
          user.setAuthUser(res.data.data.user);
          user.setToken(res.data.data.token);
          Cookie.set('jwt', res.data.data.token);

          snackbarStore.setSnackbar(true, 'You are logged in', 'success');

          navigate('/swipe');
        } else {
          snackbarStore.setSnackbar(true, 'Invalid email or password', 'error');
        }
      })
      .catch((err) => {
        snackbarStore.setSnackbar(true, err.response.data.message, 'error');
      });
  };

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
            error={isValidEmail}
            helperText={isValidEmail && 'Invalid email'}
            onChange={(e) => validateEmail(e.target.value)}
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
            error={isValidPassword}
            helperText={
              isValidPassword &&
              'Password must be at least 8 characters long and contain at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol'
            }
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => validatePassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            disabled={isValidEmail || isValidPassword}
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
