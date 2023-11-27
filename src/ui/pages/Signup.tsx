import {
  Button,
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
import { Link, useNavigate } from 'react-router-dom';
import { Country } from '../../types/country';
import { signup, locations } from '../../paths/urls';
import { useSnackbarDisplay } from '../../store/snackbarDisplay';
import styled from '@emotion/styled';
import { StyledInputField } from '../reusables/ReusablesStyling';

export default function SignUp() {
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [selectedCountryName, setSelectedCountryName] = useState<string>('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [city, setCity] = useState<string>('');
  const [zipcode, setZipcode] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  const snackbarStore = useSnackbarDisplay();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocations = async () => {
      const locationsResponse = await axios.get(locations);
      const result = await locationsResponse.data.data;
      setCountries(result);
    };
    fetchLocations();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    

    try {
      // const getCountryObejct = countries.find(
      //   (c) => c.country === selectedCountryName
      // );

      // if (!getCountryObejct) {
      //   snackbarStore.setSnackbar(true, 'No country found', 'error');
      // } else {
        const response = await axios.post(signup, {
          email: data.get('email'),
          password: data.get('password'),
          age: age,
          gender: gender,
          firstName: firstname,
          lastName: lastname,
          locationId: 1,
          city: city,
          zipcode: zipcode,
          street: street,
        });
        response.data;
        snackbarStore.setSnackbar(true, 'You are signed up', 'success');
        navigate('/signin');
      // }
    } catch (error) {
      error;
      snackbarStore.setSnackbar(true, 'Invalid input try again', 'error');
    }
  };

  const validateStringLength = (value: string, min: number, max: number) => {
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
        <StyledBox>
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
                <StyledInputField
                  autoComplete="given-name"
                  error={validateStringLength(firstname, 2, 40)}
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledInputField
                  error={validateStringLength(lastname, 2, 40)}
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledInputField
                  error={!validator.isEmail(email)}
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
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                style={{ marginBottom: '40px', width: '600px' }}
              >
                <StyledInputField
                  error={!validator.isStrongPassword(password)}
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledInputField
                  autoComplete="given-name"
                  error={!validator.isNumeric(age)}
                  value={age}
                  required
                  fullWidth
                  name="age"
                  id="age"
                  label="Age"
                  autoFocus
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledInputField
                  autoComplete="given-name"
                  error={validateStringLength(gender, 4, 6)}
                  value={gender}
                  required
                  fullWidth
                  name="gender"
                  id="gender"
                  label="Gender"
                  autoFocus
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl required sx={{ m: 0, minWidth: 285 }}>
                  <InputLabel id="demo-simple-select-label">
                    Select a country
                  </InputLabel>
                  <Select
                    error={validator.isEmpty(selectedCountryName)}
                    value={selectedCountryName}
                    fullWidth
                    name="country"
                    id="country"
                    label="Select a country"
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
                <StyledInputField
                  error={!validator.isAlpha(city)}
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledInputField
                  error={!validator.isAlphanumeric(zipcode)}
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledInputField
                  error={validator.isEmpty(street)}
                  value={street}
                  required
                  fullWidth
                  name="street"
                  id="street"
                  label="Street"
                  autoFocus
                  onChange={(e) => {
                    setStreet(e.target.value);
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
                  <StyledButton type="submit" variant="contained">
                    Cancel
                  </StyledButton>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </StyledBox>
      </Container>
    </>
  );
}

const StyledBox = styled(Box)`
  margin-top: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-top: 9%;
  color: black;
  background-color: transparent;
  &:hover {
    background-color: red;
  }
`;
