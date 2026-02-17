import Navbar from "../Navbar";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import axios from "axios";
import styles from "./Dashboard.module.css";
import { useAuth } from "../../utils/Authcontext";
const Dashboard = () => {
  const [hospitalId] = useState(useAuth().userId);
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("dddd, MMMM DD YYYY")
  );
  const [selectedDept, setSelectedDept] = useState("All");
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch appointments from backend
  const getappts = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/getapptbyhiddate",
        {
          hospitalId: hospitalId,
          date: selectedDate,
        }
      );

      // Convert backend format → frontend format
      const formattedAppointments = response.data.map((item, index) => ({
        id: index,
        patientName: item.username,
        dept: item.department,
        date: item.date,
        time: item.time,
      }));

      setAppointments(formattedAppointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Call API when date changes
  useEffect(() => {
    if (selectedDate) {
      getappts();
    }
  }, [selectedDate]);

  // 🔹 Department list
  const depts = useMemo(() => {
    const list = appointments.map((a) => a.dept);
    return ["All", ...new Set(list)];
  }, [appointments]);

  // 🔹 Filter by department
  const filteredAppointments = appointments.filter((appt) => {
    return selectedDept === "All" || appt.dept === selectedDept;
  });

  // 🔹 Stats
  const today = dayjs().format("dddd, MMMM DD YYYY");
  const tomorrow = dayjs().add(1, "day").format("dddd, MMMM DD YYYY");

  const todayCount = appointments.filter((a) => a.date === today).length;
  const tomorrowCount = appointments.filter((a) => a.date === tomorrow).length;

  return (
    <>
      <div className={styles.page}>
        <div className={styles.content}>

          {/* 🔹 Stats Cards */}
          <div className={styles.statsGrid}>
            <div className={styles.cardStat}>
              Today <br />
              <b>{todayCount}</b>
            </div>
            <div className={styles.cardStat}>
              Tomorrow <br />
              <b>{tomorrowCount}</b>
            </div>
            <div className={styles.cardStat}>
              Total <br />
              <b>{appointments.length}</b>
            </div>
          </div>

          {/* 🔹 Filters */}
          <div className={styles.filters}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                format="DD-MM-YYYY"
                value={dayjs(selectedDate)}
                onChange={(newValue) =>
                  setSelectedDate(
                    dayjs(newValue).format("dddd, MMMM DD YYYY")
                  )
                }
              />
            </LocalizationProvider>

            <select
              className={styles.select}
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
            >
              {depts.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* 🔹 Appointment List */}
          <div className={styles.apptlist}>
            <div className="grid gap-4">

              {loading && (
                <p className={styles.empty}>Loading appointments...</p>
              )}

              {!loading && filteredAppointments.map((appt) => (
                <motion.div
                  key={appt.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className={styles.card}>
                    <p className={styles.patient}>
                      {appt.patientName}
                    </p>
                    <p className={styles.meta}>
                      {appt.dept} • {appt.time}
                    </p>
                  </div>
                </motion.div>
              ))}

              {!loading && filteredAppointments.length === 0 && (
                <p className={styles.empty}>
                  No appointments for this date
                </p>
              )}

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;
