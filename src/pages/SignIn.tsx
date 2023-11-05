import Copyright from "../components/ui/Copyright";
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
} from "@mui/material";
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
          <Typography
            sx={{
              marginTop: "90px",
              textAlign: "center",
              color: "#27963C",
              fontFamily: 'cursive',
              fontWeight: "400",
              fontSize: "48px",
              letterSpacing: '0.4'
            }}
          >
            TinyTitleTinder
          </Typography>
          <Box
            sx={{
              marginTop: 10,
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
              <Typography variant="h5" marginBottom={"10px"}>
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
  );
}
