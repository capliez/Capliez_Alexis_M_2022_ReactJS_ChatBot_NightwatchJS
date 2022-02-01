import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ItemBots from "../ItemBots";
import { Grid, Paper, Box, Typography } from "@material-ui/core";
import SendMessage from "../SendMessage";
import ViewMessage from "../viewMessage";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Home = ({ history, logged, Bots, allMessages }) => {
  const messagesRef = useRef();

  useEffect(() => {
    if (!logged) history.push("/");
  }, [logged]);

  useEffect(() => {
    setTimeout(() => {
      const ref = messagesRef.current;
      ref.scrollTop = ref.scrollHeight;
    }, 300);
  }, [allMessages]);

  const renderBots = () => {
    return Bots[0].map((b) => <ItemBots key={b.id} bot={b} />);
  };
  return (
    <>
      <Box mt={2}>
        <Grid container direction="row">
          <Grid item xs={12} md={4}>
            {Bots && renderBots()}
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper square>
              <Box p={1}>
                <Typography variant="h5" gutterBottom>
                  Messages ({allMessages ? allMessages.length : 0})
                </Typography>
              </Box>
              <div className="box">
                <div className="messages" ref={messagesRef}>
                  <TransitionGroup className="message">
                    {allMessages &&
                      allMessages.map((m) => (
                        <CSSTransition
                          timeout={500}
                          classNames="item"
                          key={m.id}
                        >
                          <ViewMessage key={m.id} message={m} />
                        </CSSTransition>
                      ))}
                  </TransitionGroup>
                </div>
              </div>
            </Paper>
            <Box mt={2}>
              <SendMessage />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const mapStateToProps = ({ Auth, Bots, Messages }) => {
  const { logged } = Auth;
  const { all: allMessages } = Messages;
  return { logged, Bots, allMessages };
};

Home.propTypes = {
  logged: PropTypes.bool,
  history: PropTypes.any,
  Bots: PropTypes.object,
  allMessages: PropTypes.array,
};

export default connect(mapStateToProps)(Home);
