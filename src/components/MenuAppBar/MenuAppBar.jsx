import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { FaGrinBeamSweat } from 'react-icons/fa';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class MenuAppBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      auth: false,
      anchorEl: false
    };
  }

  handleChange = user => {
    // setthis.state.auth(event.target.checked);
    // setthis.state.auth(!!user);
    if (user) this.setthis.state.auth(true);
    else this.setthis.state.auth(false);
  };

  handleMenu = event => {
    this.setAnchorEl(event.currentTarget);
  };

  handleClose = () => {
    this.setAnchorEl(null);
  };

  render() {
    const { user } = this.props;
    const classes = useStyles();
    // const [this.state.auth, setthis.state.auth] = React.useState(true);
    // const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(this.state.anchorEl);

    console.log('[+] //// ', user);

    return (
      <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.auth}
                onChange={this.handleChange}
                aria-label="LoginSwitch"
              />
            }
            label={this.state.auth ? 'Logout' : 'Login'}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <NavLink
                style={{ color: 'white', textDecoration: 'none' }}
                activeStyle={{ color: 'white', textDecoration: 'none' }}
                className="nav-item nav-link"
                to="/"
              >
                J<FaGrinBeamSweat />Y
              </NavLink>
            </Typography>
            {this.state.auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default MenuAppBar;
