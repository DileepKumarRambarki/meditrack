import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NearbyHos from "./NearByHos";
import LabCard from "./LabCard";
import styles from "./Homepage.module.css";
import LabReport from "./LabReport";
import Appointment from "./Appointment";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
function Homepage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebar = (open) => {
        setSidebarOpen(open);
    };
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
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} id={styles.sidebar} />
                </div>
                <div id={styles.pages} ref={pages}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
