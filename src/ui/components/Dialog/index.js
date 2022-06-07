import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { IconButton } from '../index';
import { X } from 'react-feather';
import { useTheme } from '../../../contexts/ThemeContext';

const useStyles = createUseStyles({
  background: {
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  dialog: {
    backgroundColor: (props) => props.theme.container.background,
    margin: '15% auto',
    padding: 20,
    borderRadius: 10,
    minWidth: 300,
    maxWidth: (props) => props.maxWidth,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
  },
});

const Dialog = ({ children, handleClose, title, maxWidth = 400 }) => {
  const { theme } = useTheme();
  const styles = useStyles({ theme, maxWidth });
  return (
    <div className={styles.background}>
      <div className={styles.dialog}>
        <div className={styles.titleContainer}>
          <IconButton variant="round" onClick={handleClose}>
            <X />
          </IconButton>
          <span className={styles.title}>{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
};

Dialog.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.arrayOf(PropTypes.any),
  ]),
  handleClose: PropTypes.func,
  title: PropTypes.string,
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export { Dialog };
