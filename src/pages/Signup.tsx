import { Link } from 'react-router-dom';
import { Button, CssBaseline, TextField, Grid, Box, Typography, Container, Snackbar, Alert } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../components/ui/Copyright";
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

  const validateFirstname = (firstname: string) => {
    const regex = /^[a-zA-Z]+$/;
    return firstname.length > 0 && firstname.length < 255 && regex.test(firstname);
  };

  const validateLastname = (lastname: string) => {
    const regex = /^[a-zA-Z]+$/;
    return lastname.length > 0 && lastname.length < 255 && regex.test(lastname);
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9.@]+$/;
    return email.length > 0 && email.length < 255 && regex.test(email);
  };

  const validatePassword = (password: string) => {
    const regex = /^[0-9]+$/;
    return password.length > 0 && password.length < 255 && regex.test(password);
  };

  const validateCountry = (country: string) => {
    const regex = /^[a-zA-Z]+$/;
    return country.length > 0 && country.length < 255 && regex.test(country);
  };

  const validateCity = (city: string) => {
    const regex = /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF\s.'-]+$/;
    return city.length > 0 && city.length < 255 && regex.test(city);
  };

  const validateZipcode = (zipcode: string) => {
    const regex = /^[0-9]+$/;
    return zipcode.length > 0 && zipcode.length <= 10 && regex.test(zipcode);
  };

  const validateAddress = (address: string) => {
    const regex = /^[a-zA-Z0-9\s.,-]+$/;
    return address.length > 0 && address.length < 255 && regex.test(address);
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
              marginTop: 26,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Typography component="h1" variant="h5" marginBottom={'10px'}>
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
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onBlur={(e) => {
                      setEmailError(!validateEmail(e.target.value));
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ marginBottom: '40px', width: '600px' }}>
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
                        !validatePassword(e.target.value)
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
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    onBlur={(e) => {
                      setCountryError(!validateCountry(e.target.value));
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
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    onBlur={(e) => {
                      setCityError(!validateCity(e.target.value));
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
                    onChange={(e) => {
                      setZipcode(e.target.value);
                    }}
                    onBlur={(e) => {
                      setZipcodeError(!validateZipcode(e.target.value));
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
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    onBlur={(e) => {
                      setAddressError(!validateAddress(e.target.value));
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
                  backgroundColor: 'green',
                  '&:hover': {
                    backgroundColor: 'darkgreen', // Change the color on hover
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
                  textDecoration: 'none', color: 'black',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: 'red', 
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
