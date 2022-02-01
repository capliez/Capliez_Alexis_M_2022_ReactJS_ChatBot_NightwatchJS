import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const ItemBots = ({ bot }) => {
  const requireImage = (chemin) => {
    try {
      return "/images/" + chemin;
    } catch (err) {
      return "/images/homme1.jpg";
    }
  };

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={bot.name} src={requireImage(bot.avatar)} />
      </ListItemAvatar>
      <ListItemText
        primary={bot.name}
        secondary={
          <React.Fragment>
            <Typography component="span" variant="body2" color="textPrimary">
              {bot.job}
            </Typography>
            {" — " + bot.description}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

ItemBots.propTypes = {
  bot: PropTypes.object,
};

export default ItemBots;
