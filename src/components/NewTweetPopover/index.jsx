import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import ReactLoading from 'react-loading';
import { Button, Dialog } from '../../ui/components';
import { useUser } from '../../contexts/UserContext';

const useStyles = createUseStyles({
  tweetContainer: {
    boxSizing: 'border-box',
    resize: 'none',
    width: '100%',
    margin: 0,
    padding: 10,
    fontFamily: 'Arial',
  },
  characterCount: {
    fontSize: 12,
    fontFamily: 'Arial',
    color: (pastWarningCharacters) =>
      pastWarningCharacters ? '#ff4e4e' : '#797979',
  },
});

function NewTweetPopover({ handleClose }) {
  const { username } = useUser();

  const [tweet, setTweet] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const characterCount = tweet.length;
  const MAX_CHARACTERS = 120; // Constant convention is all caps
  const WARNING_CHARACTERS = 20; // Constant convention is all caps
  const pastWarningCharacters =
    characterCount >= MAX_CHARACTERS - WARNING_CHARACTERS;
  const styles = useStyles(pastWarningCharacters);

  const handlePostClick = async () => {
    if (tweet.trim() === '') {
      setError({ message: 'You can not submit a blank string' });
      return;
    }
    setLoading(true);

    // ES6 way of POST fetch using.then

    // fetch('http://localhost:3000/tweets', {
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    //   body: JSON.stringify({
    //     displayName: username,
    //     content: tweet,
    //   }),
    // })
    //   .then((resp) => resp.json())

    // ES8 Async / Await
    try {
      const resp = await fetch('http://localhost:3000/tweets', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          displayName: username,
          content: tweet,
        }),
      });
      const json = await resp.json(); // TODO should do something with this object
      handleClose();
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const handleTweetChange = (event) => {
    if (event.target.value.length <= MAX_CHARACTERS)
      setTweet(event.target.value);
  };
  const handleClearTweetClick = () => setTweet('');

  return (
    <Dialog title="New Tweet" handleClose={handleClose}>
      {loading && <ReactLoading type="spin" color="f0f6ff" />}
      {!loading && (
        <>
          <div>
            <textarea
              name="tweet"
              rows="5"
              className={styles.tweetContainer}
              onChange={handleTweetChange}
              value={tweet}
            />
            <span className={styles.characterCount}>
              {characterCount} / {MAX_CHARACTERS}
            </span>
          </div>
          <Button onClick={handleClearTweetClick}>Clear</Button>
          <Button variant="contained" onClick={handlePostClick}>
            Post
          </Button>
          {error && <span>{error.message}</span>}
        </>
      )}
    </Dialog>
  );
}

NewTweetPopover.propTypes = {
  handleClose: PropTypes.func,
};

export { NewTweetPopover };
