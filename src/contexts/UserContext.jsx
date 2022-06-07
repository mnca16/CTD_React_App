import { createContext, useState, useContext } from 'react';
import { PropTypes } from 'prop-types';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  const contextValue = { username, setUsername };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.any,
};

export { UserContextProvider };

export const useUser = () => {
  return useContext(UserContext);
};
