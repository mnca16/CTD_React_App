import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { useTheme } from '../../../contexts/ThemeContext';

const buttonStyles = {
  padding: 8,
  fontSize: 12,
  borderRadius: 3,
  borderWidth: 1,
  borderStyle: 'solid',
};

const useStyles = createUseStyles({
  contained: {
    ...buttonStyles,
    border: 'none',
    color: (theme) => theme.primary.text,
    backgroundColor: (theme) => theme.primary.main,
    '&:hover': {
      backgroundColor: (theme) => theme.primary.hover,
    },
  },
  outlined: {
    ...buttonStyles,
    background: 'none',
    color: (theme) => theme.primary.main,
    borderColor: (theme) => theme.primary.main,
    '&:hover': {
      backgroundColor: (theme) => theme.translucent[10],
    },
  },
});

const Button = ({ children, variant = 'outlined', onClick }) => {
  const { theme } = useTheme();
  const styles = useStyles(theme);

  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['outlined', 'contained']),
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export { Button };
