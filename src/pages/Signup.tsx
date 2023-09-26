import { Avatar, Button, CssBaseline, TextField, Box, Typography, Container, Alert, Snackbar, createTheme, ThemeProvider } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Copyright from "../components/ui/Copyright";
import useFormValidation from "../hooks/useFormValidation/useFormValidation";

const defaultTheme = createTheme();

export default function SignUp() {
  const {
    usernameError,
    setUsernameError,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    formValid,
    open,
    handleClose,
    handleSubmit,
    validateUsername,
    validateEmail,
    validatePassword,
  } = useFormValidation();

  return (
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
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              error={usernameError}
              value={username}
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              onBlur={(e) => {
                setUsernameError(!validateUsername(e.target.value));
              }}
            />
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
                setEmailError(!validateEmail(e.target.value));
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
                setPasswordError(!validatePassword(e.target.value));
              }}
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
              Sign up
            </Button>
            <p>
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
                    Invalid login credentials
                  </Alert>
                </Snackbar>
              )}
            </p>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}