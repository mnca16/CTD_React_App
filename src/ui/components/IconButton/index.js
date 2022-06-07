import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const iconButtonStyles = {
  display: 'flex',
  cursor: 'pointer',
  padding: 5,
  '&:hover': {
    backgroundColor: '#87878729',
  },
};

const useStyles = createUseStyles({
  round: {
    ...iconButtonStyles,
    borderRadius: '100%',
  },
  square: {
    ...iconButtonStyles,
    borderRadius: 5,
  },
});

const IconButton = ({ children, variant = 'square', onClick }) => {
  const styles = useStyles();
  return (
    <div onClick={onClick} className={styles[variant]}>
      {children}
    </div>
  );
};

IconButton.propTypes = {
  variant: PropTypes.oneOf(['square', 'round']),
  children: PropTypes.elementType,
  onClick: PropTypes.func,
};

export { IconButton };
