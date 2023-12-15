
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        404 - Not Found
      </Typography>
      <Typography variant="h5" paragraph>
        Oops! The page you are looking for might be unavailable or does not exist.
      </Typography>
      <Button component={Link} to="/dashboard" variant="contained" color="primary">
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFound;
