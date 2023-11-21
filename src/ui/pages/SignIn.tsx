import Copyright from "../components/Copyright";
import { Alert, Avatar, Button, Box, CssBaseline, Checkbox, Container, createTheme, Grid, TextField, Typography, ThemeProvider, FormControlLabel, Snackbar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import validator from "validator";
import { useState } from "react";
import { Link } from "react-router-dom";

const defaultTheme = createTheme();

export default function SignIn() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailError || passwordError || !email || !password) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 6000);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onBlur={(e) => {
                  setPasswordError(!validator.isStrongPassword(e.target.value));
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
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  handleSubmit;
                }}
              >
                Sign In
              </Button>
              {formValid ? (
                <Snackbar open={open}>
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Login successful
                  </Alert>
                </Snackbar>
              ) : (
                <Snackbar open={open}>
                  <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    Invalid login credentials
                  </Alert>
                </Snackbar>
              )}
              <Grid container>
                <Grid item xs>
                  <Typography variant="body2">
                  <Link to={""}>
                    Forgot password?
                  </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                  <Link to="/signup">
                    {"Don't have an account? Sign Up"}
                  </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
