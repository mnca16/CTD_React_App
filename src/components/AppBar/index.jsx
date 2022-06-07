import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useUser } from '../../contexts/UserContext';
import { Button, IconButton } from '../../ui/components';
import { Edit2 } from 'react-feather';
import { LoginPopover, NewTweetPopover } from '../';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  root: {
    height: 75,
    width: '100%',
    boxSizing: 'border-box',
    position: 'fixed',
    left: 0,
    top: 0,
    backgroundColor: '#222',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spacer: {
    height: 75,
  },
  title: {
    color: 'white',
    textDecoration: 'none',
  }
});

function AppBar({ title }) {
  const { username } = useUser();
  const styles = useStyles();

  const [isLoginPopoverOpen, setIsLoginPopoverOpen] = useState(false);
  const [isNewTweetFormOpen, setIsNewTweetFormOpen] = useState(false);

  const handleOpenLoginPopover = () => setIsLoginPopoverOpen(true);
  const handleCloseLoginPopover = () => {
    setIsLoginPopoverOpen(false);
  };
  const handleOpenTweetForm = () => setIsNewTweetFormOpen(true);
  const handleCloseTweetForm = () => setIsNewTweetFormOpen(false);

  //TODO remove inline styles
  return (
    <>
      <div className={styles.root}>
        <Link to="/">
          <span className={styles.title}>{title}</span>
        </Link>
        <div style={{ display: 'flex' }}>
          {!username && <Button onClick={handleOpenLoginPopover}>Login</Button>}
          {username && (
            <IconButton onClick={handleOpenTweetForm}>
              <Edit2 />
            </IconButton>
          )}
          {username && <Button variant="contained">{username}</Button>}
        </div>
      </div>
      <div className={styles.spacer} />
      {isLoginPopoverOpen && (
        <LoginPopover handleClose={handleCloseLoginPopover} />
      )}
      {isNewTweetFormOpen && (
        <NewTweetPopover handleClose={handleCloseTweetForm} />
      )}
    </>
  );
}

AppBar.propTypes = {
  title: PropTypes.string,
};

export { AppBar };
