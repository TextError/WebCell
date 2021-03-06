import React from 'react';
import Typography from '@material-ui/core/Typography';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        WebCell
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright;