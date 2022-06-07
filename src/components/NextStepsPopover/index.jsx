/*  COMPONENT NOTES
    - This component uses a JSS approach to styling.
    - Constants related to this component are placed in a constants folder in
      the same directory
*/
import React from 'react';
import nextSteps from './constants';
import { Dialog } from '../../ui/components';
import PropTypes from 'prop-types';

function NextStepsPopover({ handleClose }) {
  return (
    <Dialog title="Ideas for Next Steps" handleClose={handleClose}>
      <ol>
        {nextSteps.map((step) => (
          <li>{step}</li>
        ))}
      </ol>
    </Dialog>
  );
}

NextStepsPopover.propTypes = {
  children: PropTypes.elementType,
  handleClose: PropTypes.func,
  title: PropTypes.string,
};

export { NextStepsPopover };
