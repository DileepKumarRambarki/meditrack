import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import LabReport from './LabReport';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const Labpage=()=>{
  return(
    <>
    <LabCard/>
    <LabCard/>
    </>
    )
  }

function LabCard() {
  const [open, setOpen] = React.useState(false);
  const [download,setDownload]=React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDownload=()=>{
    console.log("report downloading");
    setDownload(true);

  }
  return (
    <Box size="large" sx={{ flexGrow: 1 , width:"90%",flexShrink:"1" ,marginBottom:"10px" }}>
      <AppBar position="static" sx={{borderRadius:"0 20px 0 20px"}}>
        <Toolbar>
          <Typography variant='h7'> Date</Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Labaratory
          </Typography>
          <Typography variant='h7' sx={{marginRight:"30px"}} >Report id</Typography>
          <Button autoFocus onClick={handleClickOpen} sx={{outline:"none"}}>
          <DownloadIcon sx={{color:"turquoise",cursor:"pointer"}}/>
          </Button>
        </Toolbar>
      </AppBar>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Lab Report
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <LabReport download={download}/>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleDownload}>
            Download
          </Button>
        </DialogActions>
      </BootstrapDialog>

    </Box>
  );
}
export default Labpage