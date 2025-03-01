import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import { Alert } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

function GrowTransition(props) {
  return <Grow {...props} />;
}

export default function Snack(props) {
  const [state, setState] = React.useState(false);

  const handleClick = () => {

    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };
  React.useEffect(()=>{
    console.log(props.open);
    setState(props.open);
  },[props.open])
  return (
    <div>
      <Snackbar
  anchorOrigin={{ vertical: "top", horizontal: "right" }}
  open={state}
  onClose={handleClose}
  TransitionComponent="SlideTransition"
  autoHideDuration={3000}
>
  <Alert
    onClose={handleClose}
    severity="success" // Success type with green checkmark
    variant="filled"
    icon={<CheckCircleIcon fontSize="inherit" />} // ✅ Tick mark icon
    sx={{
      backgroundColor: "rgb(252, 70, 100)",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: "8px", // Space between icon & text
    }}
  >
    Your appointment was confirmed
  </Alert>
</Snackbar>
    </div>
  );
}
