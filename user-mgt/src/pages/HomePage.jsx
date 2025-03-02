import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <br />
      <Link to="/add" style={{ textDecoration: 'none' }}>
        <Button variant="contained" >Add users</Button>
      </Link>
    </div>
  );
};

export default HomePage;
