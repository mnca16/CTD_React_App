import React, {useEffect} from 'react';
import { useUser } from '../../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';

export function Welcome() {
  const { username } = useUser();
  const navigate = useNavigate();

  // TODO is there a better place for these redirects?
  useEffect(function navigateToHomeIfLoggedIn() {
    if (username) navigate('/home');
  }, []);

  return (
    <div>
      <h2>Welcome to CTD Twitter</h2>
      <p>Signup/Login using the link in the top right.</p>
      <ul>
        Or find out more about us:
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
}
