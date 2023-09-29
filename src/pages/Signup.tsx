import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../components/ui/Copyright";
import validator from "validator";
import { useState } from "react";
import ButtonAppBar from "../components/ui/Appbar";

const defaultTheme = createTheme();

export default function SignUp() {
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      firstnameError ||
      lastnameError ||
      emailError ||
      passwordError ||
      !firstname ||
      !lastname ||
      !email ||
      !password
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 6000);
  };

  const validateFirstname = (firstname: string) => {
    return firstname.length > 0 && firstname.length < 255;
  };

  const validateLastname = (lastname: string) => {
    return lastname.length > 0 && lastname.length < 255;
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <ButtonAppBar />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
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
                      setEmailError(!validator.isEmail(e.target.value));
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
                      setPasswordError(
                        !validator.isStrongPassword(e.target.value)
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
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
              {formValid ? (
                <Snackbar open={open}>
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Sign up successful
                  </Alert>
                </Snackbar>
              ) : (
                <Snackbar open={open}>
                  <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    Something went wrong, please try again
                  </Alert>
                </Snackbar>
              )}
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
    </>
  );
}
