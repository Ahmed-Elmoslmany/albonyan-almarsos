import classes from './UserProfile.module.css';
import {Fragment} from 'react'

import { useSelector } from 'react-redux';

const UserProfile = () => {
  const isLoginedIn = useSelector(state => state.auth.isAuthanticated)
  return (
    <Fragment>

    {
      isLoginedIn &&
      <main className={classes.profile}>
      <h2>My User Profile</h2>
      </main>
    }
    </Fragment>
  );
};

export default UserProfile;
