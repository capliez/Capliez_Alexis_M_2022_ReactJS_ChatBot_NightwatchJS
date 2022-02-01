import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { logout } from "../../redux/auth/actions";
import PropTypes from "prop-types";

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
}));

const Menu = ({ logged, logoutAction, username }) => {
  const classes = useStyles();

  const renderButtonAuth = () => {
    if (logged) {
      return (
        <Button name="btnLogout" onClick={() => logoutAction()} color="inherit">
          Déconnexion
        </Button>
      );
    } else {
      <Button color="inherit">Connecte-toi</Button>;
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {logged ? "Bienvenu(e) " + username : "ChatBot"}
          </Typography>
          {renderButtonAuth()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = ({ Auth }) => {
  const { logged, username } = Auth;
  return { logged, username };
};

const mapDispatchToProps = {
  logoutAction: logout,
};

Menu.propTypes = {
  logged: PropTypes.bool,
  username: PropTypes.string,
  logoutAction: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
