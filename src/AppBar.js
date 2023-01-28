import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#F56A4D'}}>
        <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                JOB POST GENERATOR
            </Typography>
            <Button color="inherit">Visit Repository</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}