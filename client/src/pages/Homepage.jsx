import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NearbyHos from "./NearByHos";
import LabCard from "./LabCard";
import styles from "./Homepage.module.css";
import { useEffect, useRef, useState } from "react";

function Homepage() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleSidebar = (open) => {
        setSidebarOpen(open);
        console.log("Sidebar toggled:", open);
    };
    const pages=useRef(null);
    useEffect(()=>{
        pages.current.style.left=sidebarOpen?"250px":"0";
    },[sidebarOpen])
    return (
        <div id={styles.homepage} >
            <Navbar handlesidebar={handleSidebar} open={sidebarOpen} />
            <div id={styles.content} style={{display:"flex",flexDirection:"row"}}>
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} id={styles.sidebar} />
                <div id={styles.pages} ref={pages}>
                    <NearbyHos sidebar={sidebarOpen} />
                    {/* <LabCard/> */}
                </div>
            </div>
        </div>
    );
}

export default Homepage;
