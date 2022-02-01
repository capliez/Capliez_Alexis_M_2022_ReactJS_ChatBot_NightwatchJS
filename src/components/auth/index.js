import { Button, TextField, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../redux/auth/actions";

const useStyles = makeStyles((theme) => ({
  input: {
    flexDirection: "column",
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const Auth = ({ logged, history, loginAction }) => {
  const classes = useStyles();

  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginAction(username);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    if (logged) history.push("/home");
  }, [logged]);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1>Connexion</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={classes.input}
        autoComplete="off"
      >
        <TextField
          onChange={handleChange}
          required
          id="standard-basic"
          label="Nom d'utilisateur"
        />
        <Button name="btnLogin" disabled={logged} type="submit" variant="outlined">
          GO
        </Button>
      </form>
    </Grid>
  );
};

const mapStateToProps = ({ Auth }) => {
  const { logged } = Auth;
  return { logged };
};

const mapDispatchToProps = {
  loginAction: login,
};

Auth.propTypes = {
  logged: PropTypes.bool,
  history: PropTypes.any,
  loginAction: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
