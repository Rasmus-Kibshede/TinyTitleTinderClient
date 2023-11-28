import { Box, Button, FormControl, Grid } from '@mui/material';
import { useAuthUserStore } from '../../store/user';
import { StyledInputField } from '../resuables/ReusablesStyling';
import { updateUser } from '../../paths/urls'
import { updateParent } from '../../paths/urls'
import axios from 'axios';
import { useSnackbarDisplay } from '../../store/snackbarDisplay';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const userStore = useAuthUserStore();
  const user = userStore.authUser
  const parent = userStore.authUser?.parent;

  const snackbarStore = useSnackbarDisplay();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
//DETTE VIRKER IKKE DA data.get('email') altid har en værdi, da den er sat som default value. 
    if (data.get('email') || data.get('password')) {
      const updatedUser = await axios.put(updateUser, {
        email: user?.email,
        newEMail: data.get('email') ? data.get('email') : user?.email,
        newPassword: data.get('password')
      });


      if (updatedUser.data.success) {
        snackbarStore.setSnackbar(true, 'User updated', 'success');
      } else {
        snackbarStore.setSnackbar(true, 'update incomplete', 'error');
      }
    }

    const updatedParent = await axios.put(updateParent, {
      parentId: parent?.parentId,
      age: data.get('age') ? data.get('age') : parent?.age,
      gender: data.get('gender') ? data.get('gender') : parent?.gender,
      firstName: data.get('firstName') ? data.get('firstName') : parent?.firstName,
      lastName: data.get('lastName') ? data.get('lastName') : parent?.lastName
    })
    if (updatedParent.data.success) {
      snackbarStore.setSnackbar(true, 'Parent updated', 'success');
      navigate('/swipe')
    } else {
      snackbarStore.setSnackbar(true, 'update incomplete', 'error');
    }
  }

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
        <FormControl >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <StyledInputField name='email' label="Email" defaultValue={user?.email} fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField name='password' label="Password" defaultValue="new Password" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField name='firstName' label="First Name" defaultValue={parent?.firstName} fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField name='lastName' label="Last Name" defaultValue={parent?.lastName} fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField name='age' label="Age" defaultValue={parent?.age} type="number" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField name='gender' label="Gender" defaultValue={parent?.gender} fullWidth />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField name='street' label="Street" defaultValue={parent?.address.street} fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField name='city' label="City" defaultValue={parent?.address.city} fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField name='zipcode' label="ZipCode" defaultValue={parent?.address.zipcode} fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputField name='country' label="Country" defaultValue={parent?.address.location.country} fullWidth />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>
          <Button type="submit" sx={{ alignSelf: 'flex-end', mt: 2 }}>
            Save
          </Button>
        </FormControl>
      </Box>
    </div>
  )
}

export default Profile



