import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/Actions/authActions'
import { Avatar } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  }
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top:20,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    
    
  },
}))(Badge);

export default function Navbar() {
  const classes = useStyles();
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const auth = useSelector(state => state.auth)
  const dishCount = useSelector(state=>state.cart.dishCount)
  const dispatch = useDispatch()



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div  className={classes.root}>
      <AppBar style={{backgroundColor:'#ff8000'}} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

         <Link to="/"style={{color:"white"}}><RestaurantIcon fontSize="large"/></Link>
          <Link to="/cart" style={{color:"white",marginLeft:"1000px",marginTop:"5px"}}>
              <IconButton aria-label="cart">
              <StyledBadge badgeContent={dishCount} color="secondary">
               <ShoppingCartIcon color="white"/>
                     </StyledBadge>
              </IconButton>
                            </Link>
          <Typography variant="h6" className={classes.title}>
            {!auth.isAuth && <> 
             
            <Link className="navbar-link" style={{color:'white',float:'right', paddingLeft:'20px'}} to='/login'>Login</Link>

            <Link className="navbar-link" style={{color:'white',float:'right'}} to='/register'>Register</Link></>}
          </Typography>
          {auth.isAuth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {auth.isAuth ? <AccountCircle /> : <Avatar alt=""  className={classes.small} />}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to ='/profile'>Profile</Link></MenuItem>
                <MenuItem onClick={() => dispatch(logout())}>logout</MenuItem>
              </Menu>
            </div>
            
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}