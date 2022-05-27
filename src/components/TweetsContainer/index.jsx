/*  COMPONENT NOTES 
    - This component uses a CSS modules approach to styling
    - Styles are imported as an object as the default export
*/

import { useState, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Tweet } from '../Tweet';
import styles from './styles.module.css';

export const TweetsContainer = () => {
  // State
  const [searchText, setSearchText] = useState('');

  // Ref
  const searchElement = useRef();

  // Hooks
  const { response: tweets = [], loading } = useFetch(
    'http://localhost:3000/tweets'
  );
  // You can reassign a variable name during destrucutring
  // - In this case we take response and create a new variable named tweets
  // We also assign a default value to response in case nothing is returned
  // - In this case we assign response/tweets to an empty array

  // Handlers
  const handleUpdateSearchText = (event) => setSearchText(event.target.value);
  const handleClearSearchText = () => setSearchText('');
  const handleFocusOnSearchField = () => searchElement.current.focus();

  // Variables
  const filteredTweets = tweets.filter((post) =>
    post.displayName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div>
        <div className="search">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            ref={searchElement}
            onChange={handleUpdateSearchText}
            value={searchText}
            style={{ fontSize: 16, padding: 5 }}
          />
          <button onClick={handleClearSearchText}>Clear</button>
          <button onClick={handleFocusOnSearchField}>Focus Input</button>
        </div>
        <div className={styles.tweetsContainerWrapper}>
          <div className={styles.tweetsContainer}>
            {loading && 'Loading...'}
            {!loading &&
              filteredTweets.map((tweet) => (
                <Tweet
                  username={tweet.displayName}
                  content={tweet.content}
                  promoted={tweet.promoted}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
