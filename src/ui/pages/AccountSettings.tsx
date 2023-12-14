/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { AlertColor, Box, Button, FormControl, Grid } from '@mui/material';
import { useAuthUserStore } from '../../store/user';
import { StyledInputField } from '../resuables/ReusablesStyling';
import { updateUser } from '../../paths/urls';
import { updateParentURL } from '../../paths/urls';
import axios from 'axios';
import { useSnackbarDisplay } from '../../store/snackbarDisplay';
import { User } from '../../types/user';
import { Parent } from '../../types/parent';

function AccountSettings() {
  const userStore = useAuthUserStore();
  const authUser = userStore.authUser;
  const parent = userStore.authUser?.parent;
  const snackbarStore = useSnackbarDisplay();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    let userPlaceholder: User | null = null;

    await axios
      .put(updateUser, {
        email: authUser?.email,
        newEmail: formData.get('email')
          ? formData.get('email')
          : authUser?.email,
        newPassword: formData.get('password'),
      })
      .then((res) => {
        handleSnackbarMessage('User updated', 'success');

        if (res.data.success) {
          userPlaceholder = {
            ...res.data.data,
            parent: parent,
          };

          updateParent(formData, userPlaceholder!);
        } else {
          handleSnackbarMessage('User not updated', 'error');
        }
      })
      .catch((err) => {
        handleSnackbarMessage(err.response.data.message, 'error');
      });
  };

  const updateParent = async (data: FormData, newUser: User) => {
    await axios
      .put(updateParentURL, {
        parentId: parent?.parentId,
        age: data.get('age') ? data.get('age') : parent?.age,
        gender: data.get('gender') ? data.get('gender') : parent?.gender,
        firstName: data.get('firstName')
          ? data.get('firstName')
          : parent?.firstName,
        lastName: data.get('lastName')
          ? data.get('lastName')
          : parent?.lastName,
      })
      .then((res) => {
        handleSnackbarMessage('User updated', 'success');

        if (res.data.success) {
          const updatedP: Parent = res.data.data;
          updatedP.address = {
            addressId: parent?.address.addressId!,
            street: parent?.address.street!,
            city: parent?.address.city!,
            zipcode: parent?.address.zipcode!,
            location: {
              country: parent?.address.location.country!,
              locationId: parent?.address.location.locationId!,
            },
          };

          newUser = {
            ...newUser,
            parent: updatedP,
          };
          userStore.setAuthUser(newUser);
        } else {
          handleSnackbarMessage('User not updated', 'error');
        }
      })
      .catch((err) => {
        handleSnackbarMessage(err.response.data.message, 'error');
      });
  };

  const handleSnackbarMessage = (message: string, status: AlertColor) => {
    snackbarStore.setSnackbar(true, message, status);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: 900,
          height: 551,
          margin: 'auto',
          padding: 2,
          border: '1px solid #ccc',
          borderRadius: 8,
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <FormControl>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <StyledInputField
                autoComplete="username"
                name="email"
                label="Email"
                defaultValue={authUser?.email}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField
                autoComplete="current-password"
                type="password"
                name="password"
                label="Password"
                placeholder="new Password"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField
                name="firstName"
                label="First Name"
                defaultValue={parent?.firstName}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField
                name="lastName"
                label="Last Name"
                defaultValue={parent?.lastName}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField
                name="age"
                label="Age"
                defaultValue={parent?.age}
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField
                name="gender"
                label="Gender"
                defaultValue={parent?.gender}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField
                name="street"
                label="Street"
                defaultValue={parent?.address.street}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField
                name="city"
                label="City"
                defaultValue={parent?.address.city}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField
                name="zipcode"
                label="ZipCode"
                defaultValue={parent?.address.zipcode}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField
                name="country"
                label="Country"
                defaultValue={parent?.address.location.country}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                variant="outlined"
                size="large"
                type="submit"
                sx={{
                  width: '20%',
                  margin: '0 auto',
                  display: 'block',
                }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Box>
    </div>
  );
}

export default AccountSettings;
