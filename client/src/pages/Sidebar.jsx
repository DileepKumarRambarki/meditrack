import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import TuneIcon from '@mui/icons-material/TuneRounded';
import HospitalIcon from '@mui/icons-material/LocalHospital';
import ReportIcon from '@mui/icons-material/AssignmentTurnedIn';
import AppointIcon from "@mui/icons-material/Event"
import LabIcon from "@mui/icons-material/Biotech"
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import MenuIcon from '@mui/icons-material/Menu';
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import Done from '@mui/icons-material/Done';
import styles from "./Sidebar.module.css";
import { useEffect ,useRef} from 'react';
import { Link } from 'react-router-dom';
const handleSidebar=()=>{
  setOpen(!open);
}

export default function Sidebar(props) {
  const [open, setOpen] = React.useState(true);
  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);
  console.log("in sidebar");
  const [type, setType] = React.useState('Guesthouse');
  const [amenities, setAmenities] = React.useState([0, 6]);
  const sidebar=useRef(null);
  useEffect(()=>{
    sidebar.current.style.left=(open?"0px":"-250px");
  },[open])
  return (
    // <React.Fragment>
      
        
                <Box
                  sx={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"10px",
                    // position: "fixed",
                    // top: "80px",
                    width: "230px",
                    padding:"0 10px",
                    transition: "left 0.5s ease-in-out",
                    zIndex:"1000",
                  }}
                  id={styles.sidebar}
                  ref={sidebar}
                >
                  {[
                    {
                      name: 'Nearby hospitals',
                      icon: <HospitalIcon />,
                      url:"nearbyhos",
                    },
                    {
                      name: 'Your reports',
                      icon: <ReportIcon />,
                      url:"lab-reports"
                    },
                    {
                      name: 'Appointments',
                      icon: <AppointIcon />,
                      url:"appointments"
                    },
                    {
                      name: 'Labaratory',
                      icon: <LabIcon />,
                      url:"lab"
                    },
                    
                  ].map((item) => (
                    <Link to={item.url} style={{textDecoration:"none"}}>
                    <Card
                      key={item.name}
                      sx={{
                        boxShadow: 'none',
                        '&:hover': { bgcolor: 'background.level1' ,border:"1px solid black"},
                        
                      }}
                    >
                      <CardContent sx={{cursor:"pointer"}}>
                        {item.icon}
                        <Typography level="title-md" sx={{textAlign:"left"}}>{item.name}</Typography>
                      </CardContent>
                    </Card>
                    </Link>
                  ))}
                </Box>
    // </React.Fragment>
  );
}
