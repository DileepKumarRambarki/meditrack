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

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const [type, setType] = React.useState('Guesthouse');
  const [amenities, setAmenities] = React.useState([0, 6]);
    const handleSidebar=()=>{
        setOpen(!open);
    }
  return (
    <React.Fragment>
      <Button
        sx={{padding:"10px",outline:"none",background:"transparent"}}
        onClick={handleSidebar}
      >
        <MenuIcon  sx={{marginRight:"0px", cursor:"pointer",fontSize:"2rem"}} />
      </Button>
      <Drawer
        size="sm"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        p={0}
        hideBackdrop
        sx={{backdropFilter:"none",zIndex:"0"}}
        slotProps={{
            content: {
            sx: {
                p: { md: 2, sm: 0 },
                boxShadow: 'none',
                backgroundColor:"white",
            },
            },
        }}
    >
        <Sheet
          sx={{
            borderRadius: 'md',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflow: 'auto',
            padding:"0"
          }}
        >
          <DialogContent sx={{ gap: 2 }}>
            <FormControl sx={{paddingTop:"55px"}}>
              <RadioGroup
                value={type || ''}
                onChange={(event) => {
                  setType(event.target.value);
                }}
              >
                <Box
                  sx={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"10px"
                  }}
                >
                  {[
                    {
                      name: 'Nearby hospitals',
                      icon: <HospitalIcon />,
                    },
                    {
                      name: 'Your reports',
                      icon: <ReportIcon />,
                    },
                    {
                      name: 'Appointments',
                      icon: <AppointIcon />,
                    },
                    {
                      name: 'Labaratory',
                      icon: <LabIcon />,
                    },
                  ].map((item) => (
                    <Card
                      key={item.name}
                      sx={{
                        boxShadow: 'none',
                        '&:hover': { bgcolor: 'background.level1' },
                      }}
                    >
                      <CardContent>
                        {item.icon}
                        <Typography level="title-md">{item.name}</Typography>
                      </CardContent>
                      <Radio
                        disableIcon
                        overlay
                        checked={type === item.name}
                        variant="outlined"
                        color="neutral"
                        value={item.name}
                        sx={{ mt: -2 }}
                        slotProps={{
                          action: {
                            sx: {
                              ...(type === item.name && {
                                borderWidth: 2,
                                borderColor:
                                  'var(--joy-palette-primary-outlinedBorder)',
                              }),
                              '&:hover': {
                                bgcolor: 'transparent',
                              },
                            },
                          },
                        }}
                      />
                    </Card>
                  ))}
                </Box>
              </RadioGroup>
            </FormControl>

          </DialogContent>

        </Sheet>
      </Drawer>
    </React.Fragment>
  );
}
