import { Box, Button, Grid, TextField } from '@mui/material'
import { useAuthUserStore } from '../../store/user';

function Profile() {
  const userStore = useAuthUserStore();

  //const [address, setAddress] = useState<Address>();
  //const [location, setLocation] = useState<Location>();
  const user = userStore.authUser
  const parent = userStore.authUser?.parent;
  console.log(user);


  //Wrap med form. 
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
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField label="Email" value={user?.email} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Password" defaultValue="new Password" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <TextField label="First Name" value={parent?.firstName} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Last Name" value={parent?.lastName} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Age" value={parent?.age} type="number" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Gender" value={parent?.gender} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Street" value={parent?.address.street} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="City" value={parent?.address.city} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="ZipCode" value={parent?.address.zipcode} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Country" value={parent?.address.location.country} fullWidth />
        </Grid>
        <Button>Submit</Button>
      </Grid>
    </Box>
    </div>
  )
}

export default Profile