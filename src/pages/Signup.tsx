import { Link } from "react-router-dom";
import {
  Button,
  CssBaseline,
  TextField,
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

const defaultTheme = createTheme();

export default function SignUp() {
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [zipcodeError, setZipcodeError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      firstnameError ||
      lastnameError ||
      emailError ||
      passwordError ||
      countryError ||
      cityError ||
      zipcodeError ||
      addressError ||
      !firstname ||
      !lastname ||
      !email ||
      !password ||
      !country ||
      !city ||
      !zipcode ||
      !address
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
              fontFamily: 'Josefin Sans, sans-serif',
              fontWeight: "400",
              fontSize: "48px",
              letterSpacing: '0.4'
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
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Typography component="h1" variant="h5" marginBottom={"10px"}>
                Sign up
              </Typography>
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
                    sx={{
                      '& fieldset': {
                        borderColor: firstnameError ? 'red' : 'green', // Grøn border color, hvis feltet opfylder kravene, ellers rød
                      },
                    }}  
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                    onBlur={(e) => {
                      const firstNameInputValue = e.target.value;
                      const isLengthValid = validator.isLength(
                        firstNameInputValue,
                        {
                          min: 2,
                          max: 40,
                        }
                      );
                      const chars = validator.isAlpha(firstNameInputValue);
                      setFirstnameError(!(isLengthValid && chars));
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
                    sx={{
                      '& fieldset': {
                        borderColor: lastnameError ? 'red' : 'green', // Grøn border color, hvis feltet opfylder kravene, ellers rød
                      },
                    }}  
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                    onBlur={(e) => {
                      const lastNameInputValue = e.target.value;
                      const isLengthValid = validator.isLength(
                        lastNameInputValue,
                        {
                          min: 2,
                          max: 40,
                        }
                      );
                      const chars = validator.isAlpha(lastNameInputValue);
                      const specialCharacters =
                        /^[!@#$%^&*()_+\-=,.<>?;:'"[\]{}/\\|~`-]+$/;
                      setLastnameError(
                        !((isLengthValid && chars) || specialCharacters)
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={emailError}
                    value={email}
                    required
                    fullWidth
                    id="email"
                    label="Email address"
                    name="email"
                    autoComplete="email"
                    sx={{
                      '& fieldset': {
                        borderColor: emailError ? 'red' : 'green', // Grøn border color, hvis feltet opfylder kravene, ellers rød
                      },
                    }}  
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onBlur={(e) => {
                      setEmailError(!validator.isEmail(e.target.value));
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{ marginBottom: "40px", width: "600px" }}
                >
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
                    sx={{
                      '& fieldset': {
                        borderColor: passwordError ? 'red' : 'green', // Grøn border color, hvis feltet opfylder kravene, ellers rød
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={countryError}
                    value={country}
                    required
                    fullWidth
                    name="country"
                    id="country"
                    label="Country"
                    autoFocus
                    sx={{
                      '& fieldset': {
                        borderColor: countryError ? 'red' : 'green', // Grøn border color, hvis feltet opfylder kravene, ellers rød
                      },
                    }}  
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    onBlur={(e) => {
                      const countryInputValue = e.target.value;
                      const isLengthValid = validator.isLength(
                        countryInputValue,
                        {
                          min: 1,
                          max: 40,
                        }
                      );
                      const chars = validator.isAlpha(countryInputValue);
                      setCountryError(!(isLengthValid && chars));
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={cityError}
                    value={city}
                    required
                    fullWidth
                    name="city"
                    id="city"
                    label="City"
                    autoFocus
                    sx={{
                      '& fieldset': {
                        borderColor: cityError ? 'red' : 'green', // Grøn border color, hvis feltet opfylder kravene, ellers rød
                      },
                    }}  
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    onBlur={(e) => {
                      setCityError(!validator.isAlpha(e.target.value));
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={zipcodeError}
                    value={zipcode}
                    required
                    fullWidth
                    name="zipcode"
                    id="zipcode"
                    label="Zipcode"
                    autoFocus
                    sx={{
                      '& fieldset': {
                        borderColor: zipcodeError ? 'red' : 'green', // Grøn border color, hvis feltet opfylder kravene, ellers rød
                      },
                    }}  
                    onChange={(e) => {
                      setZipcode(e.target.value);
                    }}
                    onBlur={(e) => {
                      setZipcodeError(
                        !validator.isPostalCode(e.target.value, "any")
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={addressError}
                    value={address}
                    required
                    fullWidth
                    name="address"
                    id="address"
                    label="Address"
                    autoFocus
                    sx={{
                      '& fieldset': {
                        borderColor: addressError ? 'red' : 'green', // Grøn border color, hvis feltet opfylder kravene, ellers rød
                      },
                    }}  
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    onBlur={(e) => {
                      const addressInputValue = e.target.value;
                      const isLengthValid = validator.isLength(
                        addressInputValue,
                        {
                          min: 1,
                          max: 40,
                        }
                      );
                      const chars = validator.isAlpha(addressInputValue);
                      const specialCharactersRegex =
                        /^[!@#$%^&*()_+\-=,.<>?;:'"[\]{}/\\|~`-]+$/;
                      setAddressError(
                        !((isLengthValid && chars) || specialCharactersRegex)
                      );
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item container xs={4} spacing={1}>
                <Grid item xs={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 1,
                      backgroundColor: "#27963C",
                      "&:hover": {
                        backgroundColor: "green",
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Link to="/">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        mt: 1,
                        textDecoration: "none",
                        color: "black",
                        backgroundColor: "transparent",
                        "&:hover": {
                          backgroundColor: "red",
                        },
                      }}
                    >
                      Cancel
                    </Button>
                  </Link>
                </Grid>
              </Grid>
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
            </Box>
          </Box>
          <Copyright sx={{ mt: 1 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
