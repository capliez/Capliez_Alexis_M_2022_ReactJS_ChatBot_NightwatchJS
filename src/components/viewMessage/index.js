import React from "react";
import { Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";
import PropTypes from "prop-types";

const ViewMessage = ({ message }) => {
  const requireImage = (chemin) => {
    try {
      return "../../images/" + chemin;
    } catch (err) {
      return "../../images/homme1.jpg";
    }
  };
  const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.2)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }))(Badge);

  const formatDate = (str) => moment(str).format("H:mm:s DD/MM/YYYY ");
  return (
    <>
      {message && (
        <>
          <ListItem button>
            <ListItemAvatar>
              <StyledBadge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar
                  alt={message.pseudo}
                  src={requireImage(message.avatar)}
                />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText
              primary={message.pseudo}
              secondary={message.message}
            />
            <Box mt={0} mr="15px" fontSize={10} fontFamily="fontFamily">
              <p>{formatDate(message.sentAt)}</p>
            </Box>
          </ListItem>
        </>
      )}
    </>
  );
};

ViewMessage.propTypes = {
  message: PropTypes.object,
};

export default ViewMessage;
