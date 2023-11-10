import Copyright from '../components/ui/Copyright';
import {
  Alert,
  Button,
  Box,
  CssBaseline,
  Checkbox,
  Container,
  createTheme,
  Grid,
  TextField,
  Typography,
  ThemeProvider,
  FormControlLabel,
  Snackbar,
} from '@mui/material';
import validator from 'validator';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignIn() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    console.log('intry')
    if (emailError || passwordError || !email || !password) {
      setFormValid(false);
      setOpen(true);
      return;
  }
  try{
    console.log('intry')
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(response)
    if(response.ok) {
      const data = await response.json();
      setFormValid(true)
      setOpen(true)
      console.log(data) 
    } else {
      setOpen(true);
    }
  } catch(error) {
    console.log('Error during signin', error); 
  }
}
  const handleClose = (): void => {
    setOpen(false);
  };
  

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Typography
            sx={{
              marginTop: "90px",
              textAlign: "center",
              color: "#27963C",
              fontFamily: "Josefin Sans, sans-serif",
              fontWeight: "400",
              fontSize: "48px",
              letterSpacing: "0.4",
            }}
          >
            TinyTitleTinder
          </Typography>
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Typography component="h1" variant="h5" marginBottom={"10px"}>
                Sign in
              </Typography>
              <Typography style={{ fontSize: "13px" }}>
                Get started for free
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    margin="normal"
                    error={emailError}
                    value={email}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    sx={{
                      "& fieldset": {
                        borderColor: emailError ? "red" : "green", 
                      },
                    }}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onBlur={(e) => {
                      setEmailError(!validator.isEmail(e.target.value));
                    }}
                  />
                  <TextField
                    margin="normal"
                    error={passwordError}
                    value={password}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    sx={{
                      "& fieldset": {
                        borderColor: passwordError ? "red" : "green", 
                      },
                    }}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    onBlur={(e) => {
                      setPasswordError(
                        !validator.isStrongPassword(e.target.value)
                      );
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      backgroundColor: "#27963C",
                      "&:hover": {
                        backgroundColor: "darkgreen",
                      },
                    }}
                    onClick={() => {
                      handleSubmit;
                    }}
                  >
                    Sign In
                  </Button>
                  {formValid ? (
                    <Snackbar
                      open={open}
                      anchorOrigin={{ vertical: "top", horizontal: "right" }}
                      autoHideDuration={3000}
                    >
                      <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: "100%" }}
                      >
                        Login successful
                      </Alert>
                    </Snackbar>
                  ) : (
                    <Snackbar
                      open={open}
                      anchorOrigin={{ vertical: "top", horizontal: "right" }}
                      autoHideDuration={3000}
                    >
                      <Alert
                        onClose={handleClose}
                        severity="error"
                        sx={{ width: "100%" }}
                      >
                        {emailError && "Invalid email address. "}
                        {passwordError && "Invalid password."}
                      </Alert>
                    </Snackbar>
                  )}
                  <Grid container>
                    <Grid item xs>
                      <Typography variant="body2">
                        <Link to="/signup">{"Create account"}</Link>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" marginRight={"170px"}>
                        <Link to={""}>Forgot password?</Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 2, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  )}
