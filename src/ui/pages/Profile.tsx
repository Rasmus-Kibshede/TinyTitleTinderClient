import { Box, TextField } from '@mui/material'
import { useState } from 'react';
import { useAuthUserStore } from '../../store/user';
import { User } from '../../types/user';

function Profile() {
  const userStore = useAuthUserStore();

  const [user, setUser] = useState<User | null>();
  //const [address, setAddress] = useState<Address>();
  //const [location, setLocation] = useState<Location>();
  const parent = userStore.authUser?.parent;
  console.log(setUser);
  

//Wrap med form. 
  return (
    <div>Profile
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Email" value={user?.email}  />
        <TextField label="Password" defaultValue="new Password" />
        <TextField label="First name" value={parent?.fistName} />
        <TextField label="Last name" value={parent?.lastName} />
        <TextField label="Age" value={parent?.age} type='number' />
        <TextField label="Gender" value={parent?.gender} />
        <TextField label="Street" value={parent?.address.street} />
        <TextField label="City" value={parent?.address.city} />
        <TextField label="zipCode" value={parent?.address.zipcode} />
        <TextField label="Country" value={parent?.address.location.country} />
      </Box>

    </div>
  )
}

export default Profile