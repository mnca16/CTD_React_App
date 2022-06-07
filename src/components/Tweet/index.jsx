/*  COMPONENT NOTES 
    - This component uses a JSS approach to styling
    - JSS supports "SASS" syntax and lets us next selectors with the '&'
    - createUse styles returns a hook to us that can be invoked in the component
    - useStyles is a hook that takes an argument of a props object
    - We can use these props to conditionally render styles
*/

import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '../../ui/components';
import PropTypes from 'prop-types';
import { useTheme } from '../../contexts/ThemeContext';

const useStyles = createUseStyles({
  root: {
    border: (props) =>
      props.promoted
        ? `1px solid ${props.theme.promoted.outline}`
        : `1px solid ${props.theme.container.outline}`,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    backgroundColor: (props) =>
      props.promoted
        ? props.theme.promoted.background
        : props.theme.container.background,
    boxShadow: 'rgb(210 210 210) 0px 3px 6px 0px',
    width: '100%',
  },
  username: {
    fontWeight: 'bold',
  },
  tweetBody: {
    fontSize: 14,
    paddingLeft: 20,
    borderLeft: (props) => `3px solid ${props.theme.translucent[10]}`,
    color: (props) => props.theme.translucent[70],
  },
  likes: {
    color: (props) => `3px solid ${props.theme.translucent[10]}`,
    fontSize: 12,
  },
});

function Tweet({ username, content, promoted = false }) {
  const { theme } = useTheme();
  const styles = useStyles({ theme, promoted });

  const [likes, setLikes] = useState(0);

  const handleAddLike = () => setLikes(likes + 1);
  const handleRemoveLike = () => setLikes(likes - 1);

  return (
    <div className={styles.root}>
      <span className={styles.username}>{username}</span>
      <p className={styles.tweetBody}>{content}</p>
      {likes === 0 && <Button onClick={handleAddLike}>Like</Button>}
      {likes > 0 && <Button onClick={handleRemoveLike}>Remove Like</Button>}
      <span className={styles.likes}>{likes} Likes</span>
    </div>
  );
}

Tweet.propTypes = {
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  promoted: PropTypes.bool,
};

export { Tweet };
