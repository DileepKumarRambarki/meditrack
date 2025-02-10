import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
export default function ButtonAppBar() {
  return (
    <Box size="large" sx={{ flexGrow: 1 , width:"90%",flexShrink:"1" ,marginBottom:"10px" }}>
      <AppBar position="static" sx={{borderRadius:"0 20px 0 20px"}}>
        <Toolbar>
          <Typography variant='h7'> report id</Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Labaratory
          </Typography>
          <Typography variant='h7' sx={{marginRight:"30px"}} >Date</Typography>
          <DownloadIcon sx={{color:"turquoise",cursor:"pointer"}}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
