import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useFormValidation from '../hooks/useFormValidation/useFormValidation';
import Copyright from '../components/ui/Copyright';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

    const {
        firstnameError,
        setFirstnameError,
        lastnameError,
        setLastnameError,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        firstname,
        setFirstname,
        lastname,
        setLastname,
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        validateFirstname,
        validateLastname,
        validateEmail,
        validatePassword,
      } = useFormValidation();

  /*const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),  
      email: data.get('email'),
      password: data.get('password'),
    });
  };*/

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
            Sign up
          </Typography>
          <Box 
            component="form" 
            noValidate 
            onSubmit={handleSubmit} 
            sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  error={firstnameError}
                  value={firstname}
                  required
                  fullWidth
                  name="firstName"
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                  onBlur={(e) => {
                    setFirstnameError(!validateFirstname(e.target.value));
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={lastnameError}
                  value={lastname}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                  onBlur={(e) => {
                    setLastnameError(!validateLastname(e.target.value));
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={emailError}
                  value={email}
                  required
                  fullWidth
                  id="email"
                  label="Email address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onBlur={(e) => {
                    setEmailError(!validateEmail(e.target.value));
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={passwordError}
                  value={password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  onBlur={(e) => {
                    setPasswordError(!validatePassword(e.target.value));
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}