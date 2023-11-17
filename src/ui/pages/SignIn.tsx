import FormControlLabel from '@mui/material/FormControlLabel';
import {
  Link,
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
import { useNavigate } from 'react-router-dom';
import { useAuthUserStore } from '../../store/user';
import { useSnackbarDisplay } from '../../store/snackbarDisplay';

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

    user.setAuthUser(response.data.data.user);
    user.setToken(response.data.data.token);
    Cookie.set('jwt', response.data.data.token);

    snackbarStore.setSnackbar(true, 'test 123445', 'success');

    navigate('/profile');
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
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
