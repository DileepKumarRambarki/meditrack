import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "../Homepage.module.css";
import { TbCalendarStats } from "react-icons/tb";
import ReportIcon from '@mui/icons-material/AssignmentTurnedIn';
import Dashboard from "./Dashboard";
const HospitalHome=()=>{
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebar = (open) => {
        setSidebarOpen(open);
    };
    const options=[
        {
          name: 'Dashboard',
          icon: <TbCalendarStats />,
          url:"dashboard",
        },
        {
          name: 'upload reports',
          icon: <ReportIcon />,
          url:"addpredcription"
        },
      ];

    const pages=useRef(null);
    useEffect(()=>{
        pages.current.style.left=sidebarOpen?"250px":"0";
        pages.current.style.width=sidebarOpen?"70%":"100%";
    },[sidebarOpen])
    return (
        <div id={styles.homepage} >
            <Navbar handlesidebar={handleSidebar} open={sidebarOpen} id={styles.navbar} />
            <div id={styles.content} style={{display:"flex",flexDirection:"row"}}>
                <div id={styles.sidebox}>
                <Sidebar 
                open={sidebarOpen} 
                setOpen={setSidebarOpen} 
                id={styles.sidebar} 
                options={options}
                />
                </div>
                <div id={styles.pages} ref={pages}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );

}
export default HospitalHome;