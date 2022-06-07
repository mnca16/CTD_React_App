import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog } from '../../ui/components';
import { useUser } from '../../contexts/UserContext.jsx';
import { useNavigate } from 'react-router-dom';

function LoginPopover({ handleClose }) {
  const { setUsername } = useUser();
  const navigate = useNavigate();

  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleEnter = (event) => {
    event.key === 'Enter' && handleSubmitClick();
  };
  const handleSubmitClick = () => {
    setUsername(text);
    handleClose();
    navigate('/home');
  };

  return (
    <Dialog title="Login" handleClose={handleClose}>
      <div>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onKeyDown={handleEnter}
          autoFocus
        />
      </div>
      <Button onClick={handleSubmitClick}>Login</Button>
    </Dialog>
  );
}

LoginPopover.propTypes = {
  handleClose: PropTypes.func,
};

export { LoginPopover };
