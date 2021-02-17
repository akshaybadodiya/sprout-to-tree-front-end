import React from 'react';
import { Login } from './views/login/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Home } from './views/login/home/home';
import { CreateQuestion } from './components/create-question/create-question';
import { BottomNavigation, BottomNavigationAction, Slide } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import classes from '*.module.css';

interface ComponentProps {
  onClick?: () => void
}

interface _ComponentProps extends ComponentProps { }


const App: React.FC<_ComponentProps> = (props) => {
  const { onClick } = props
  const [value, setValue] = React.useState(0);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/reset" render={() => <Login />} />
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/create" render={() => <CreateQuestion />} />
      </Switch>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={500}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          style={{ position: "fixed", bottom: 0, width: "100%" }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Slide>
    </Router >
  )


  // <Login />
}

export default App;