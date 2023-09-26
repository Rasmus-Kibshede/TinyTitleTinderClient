import { AppBar, Box, Toolbar, Typography, Button, IconButton, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignIn from "./Signin";
import Home from "../../pages/Home";
import Signup from "../../pages/Signup";


/**
 * ButtonAppBar component that displays the app's navigation bar
 */
export default function ButtonAppBar() {
  return (
  <Router> 
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button component={Link} to="/" color="inherit" href="/">
              Home
            </Button>
            <Button component={Link} to="/about" color="inherit">
              About
            </Button>
            <Button component={Link} to="/Contact" color="inherit">
              Contact
            </Button>
          </Typography>
            <Button component={Link} to="/Signup" color="inherit">
              Signup</Button>
            <Button component={Link} to="/Signin" color="inherit">
              Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Container>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/About">
            Mangler Path
          </Route>
          <Route path="/Contact">
            Mangler Path
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Signin">
            <SignIn />
          </Route>
        </Switch>
      </Container>
  </Router> 
  );
}
