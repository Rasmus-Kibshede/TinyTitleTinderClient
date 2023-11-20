import { Link } from 'react-router-dom';
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from '@mui/material';
import validator from 'validator';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Country } from '../../types/country';

export default function SignUp() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCountryName, setSelectedCountryName] = useState<string>(''); // sæt id fra countrylist
  const [countries, setCountries] = useState<Country[]>([]);
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    const fetchLocations = async () => {
      const locationsResponse = await axios.get(
        'http://localhost:3000/locations'
      );
      const result = await locationsResponse.data.data;
      setCountries(result);
    };
    fetchLocations();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const getCountryObejct = countries.find(
        (c) => c.country === selectedCountryName
      );

      if (getCountryObejct === undefined) {
        console.log('no country found');
      } else {
        console.log(getCountryObejct);
        console.log(getCountryObejct.locationId);

        const user = {
          email: email,
          password: password,
          age: age,
          gender: gender,
          firstName: firstname,
          lastName: lastname,
          locationId: getCountryObejct.locationId,
          city: city,
          zipcode: zipcode,
          address: address,
        };

        const response = await axios.post(
          'http://localhost:3000/users/signup',
          { user }
        );
        console.log('Request sent succesfully!', response.data);
      }
    } catch (error) {
      console.error('Error, data not send!', error);
    }
  };

  const validateStringLenght = (value: string, min: number, max: number) => {
    return !(
      validator.isAlpha(value) &&
      validator.isLength(value, {
        min: min,
        max: max,
      })
    );
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Typography
          sx={{
            marginTop: '90px',
            textAlign: 'center',
            color: '#27963C',
            fontFamily: 'Josefin Sans, sans-serif',
            fontWeight: '400',
            fontSize: '48px',
            letterSpacing: '0.4',
          }}
        >
          TinyTitleTinder
        </Typography>
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
                  error={validateStringLenght(firstname, 2, 40)}
                  value={firstname}
                  required
                  fullWidth
                  name="firstName"
                  id="firstName"
                  label="First Name"
                  autoFocus
                  sx={{
                    '& fieldset': {
                      borderColor: 'green',
                    },
                  }}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={validateStringLenght(lastname, 2, 40)}
                  value={lastname}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  sx={{
                    '& fieldset': {
                      borderColor: 'green',
                    },
                  }}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!validator.isEmail(email)}
                  value={email}
                  required
                  fullWidth
                  id="email"
                  label="Email address"
                  name="email"
                  autoComplete="email"
                  sx={{
                    '& fieldset': {
                      borderColor: 'green',
                    },
                  }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                style={{ marginBottom: '40px', width: '600px' }}
              >
                <TextField
                  error={!validator.isStrongPassword(password)}
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
                      borderColor: 'green',
                    },
                  }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  error={!validator.isNumeric(age)}
                  value={age}
                  required
                  fullWidth
                  name="age"
                  id="age"
                  label="Age"
                  autoFocus
                  sx={{
                    '& fieldset': {
                      borderColor: 'green',
                    },
                  }}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  error={
                    !(
                      validator.isAlpha(gender) &&
                      validator.isLength(gender, {
                        min: 4,
                        max: 6,
                      })
                    )
                  }
                  value={gender}
                  required
                  fullWidth
                  name="gender"
                  id="gender"
                  label="Gender"
                  autoFocus
                  sx={{
                    '& fieldset': {
                      borderColor: 'green',
                    },
                  }}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl required sx={{ m: 0, minWidth: 285 }}>
                  <InputLabel id="demo-simple-select-disabled-label">
                    Country
                  </InputLabel>
                  <Select
                    value={selectedCountryName}
                    required
                    fullWidth
                    name="country"
                    id="country"
                    label="Country!"
                    autoFocus
                    sx={{
                      '& fieldset': {
                        borderColor: 'green',
                      },
                    }}
                    onChange={(e) => {
                      setSelectedCountryName(e.target.value);
                    }}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 200,
                        },
                      },
                    }}
                  >
                    {countries ? (
                      countries.map((location) => (
                        <MenuItem
                          key={location.country}
                          value={location.country}
                        >
                          {location.country}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem>no countries</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!validator.isAlpha(city)}
                  value={city}
                  required
                  fullWidth
                  name="city"
                  id="city"
                  label="City"
                  autoFocus
                  sx={{
                    '& fieldset': {
                      borderColor: 'green',
                    },
                  }}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!validator.isAlphanumeric(zipcode)}
                  value={zipcode}
                  required
                  fullWidth
                  name="zipcode"
                  id="zipcode"
                  label="Zipcode"
                  autoFocus
                  sx={{
                    '& fieldset': {
                      borderColor: 'green',
                    },
                  }}
                  onChange={(e) => {
                    setZipcode(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!validator.isAscii(address)}
                  value={address}
                  required
                  fullWidth
                  name="address"
                  id="address"
                  label="Address"
                  autoFocus
                  sx={{
                    '& fieldset': {
                      borderColor: 'green',
                    },
                  }}
                  onChange={(e) => {
                    setAddress(e.target.value);
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
                    backgroundColor: '#27963C',
                    '&:hover': {
                      backgroundColor: 'green',
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
                      textDecoration: 'none',
                      color: 'black',
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
          </Box>
        </Box>
      </Container>
    </>
  );
}
