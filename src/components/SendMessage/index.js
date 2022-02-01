import React, { useState } from "react";
import { Box, InputBase, Toolbar, IconButton, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { add } from "../../redux/messages/action";
import SendIcon from "@material-ui/icons/Send";
import PropTypes from "prop-types";
import { v4 } from "uuid";
const SendMessage = ({ addAction, username, Bots }) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    let newMessage = e.target.value;
    if (newMessage.substr(0, 3) === "--c") {
      newMessage = "--commands";
    }

    setMessage(newMessage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") return false;

    createMessage();
  };

  //Création du message robot
  const createMessageHelp = () => {
    const messageHelp = {
      id: v4(),
      pseudo: "Robot Assistant",
      avatar: "robot.jpg",
      isUser: false,
      message: "Les commandes disponibles : Bots, Salut, Bye, Bonjour, Météo ",
      sentAt: Date.now(),
    };

    addAction(messageHelp);
  };

  //Envoie message avec la toucher ENTER
  const handleKeyUp = (event) => {
    if (message.trim() === "") return false;

    if (event.key === "Enter") {
      createMessage();
    }
  };

  function firstCapitalize(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");
  }

  //On vérifie que la commande appartient à un bots
  const verifResponseBot = (message) => {
    console.log(firstCapitalize(message));
    Bots[0].map((item) =>
      item.options[firstCapitalize(message)]
        ? setTimeout(() => {
            createMessageBot(item.name, item.options[message], item.avatar);
          }, 2000)
        : false
    );
  };

  //Création du message des bots
  const createMessageBot = (name, messagebot, avatar) => {
    const messageNew = {
      id: v4(),
      pseudo: name,
      avatar,
      message: messagebot,
      isUser: false,
      sentAt: Date.now(),
    };

    addAction(messageNew);
  };

  //Création du message utilisateur
  const createMessage = () => {
    if (message !== "--commands") {
      const newMessage = {
        id: v4(),
        pseudo: username,
        isUser: true,
        message: message,
        sentAt: Date.now(),
      };
      addAction(newMessage);
      verifResponseBot(message);
    } else {
      createMessageHelp();
    }

    setMessage("");
  };

  return (
    <Toolbar position="relative">
      <Box width="85%" m="auto">
        <Paper onSubmit={(e) => handleSubmit(e)} component="form">
          <Box p="5px" display="flex">
            <InputBase
              name="btnAddMessage"
              fullWidth={true}
              required
              onKeyUp={(e) => handleKeyUp(e)}
              onChange={(e) => handleChange(e)}
              value={message}
              placeholder='Tape "--commands" pour voir les commandes'
              inputProps={{
                "aria-label": 'Tape "--commands" pour voir les commandes',
              }}
            />

            <IconButton name="btnSendMessage" type="submit" aria-label="search">
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </Box>
    </Toolbar>
  );
};

const mapStateToProps = ({ Auth, Bots }) => {
  const { username } = Auth;
  return { username, Bots };
};

const mapDispatchToProps = {
  addAction: add,
};

SendMessage.propTypes = {
  addAction: PropTypes.func,
  username: PropTypes.string,
  Bots: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage);
