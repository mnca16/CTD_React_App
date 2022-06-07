import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { NextStepsPopover } from '../NextStepsPopover';

const useStyles = createUseStyles({
  footer: {
    boxSizing: 'border-box',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#222',
    color: 'white',
    fontSize: 14,
    padding: '10px 20px',
    pointer: '',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextSteps: {
    padding: 5,
    borderRadius: 5,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#d8d8d821',
    },
  },
});

export function Footer() {
  const styles = useStyles();

  const [nextStepsPopoverOpen, setNextStepsPopoverOpen] = useState(false);

  const handleOpenNextStepsPopover = () => setNextStepsPopoverOpen(true);
  const handleCloseNextStepsPopover = () => setNextStepsPopoverOpen(false);

  return (
    <>
      <footer className={styles.footer}>
        <span className={styles.nextSteps} onClick={handleOpenNextStepsPopover}>
          Ideas for Next Steps
        </span>
        <span>Karson Kalt 2022</span>
      </footer>
      {nextStepsPopoverOpen && (
        <NextStepsPopover handleClose={handleCloseNextStepsPopover} />
      )}
    </>
  );
}
