import React from 'react';
import { AppBar, Footer } from '../../components';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  root: {
    padding: 20,
    fontFamily: 'Arial',
    backgroundColor: '#eee',
    minHeight: '100vh',
  },
});

function Template({ children }) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar title="CTD Twitter" />
      {children}
      <Footer />
    </div>
  );
}

Template.propTypes = {
  children: PropTypes.any,
};

export { Template };
