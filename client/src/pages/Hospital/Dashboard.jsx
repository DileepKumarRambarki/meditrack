import Navbar from "../Navbar";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  // Mock data (replace with backend later)
  const mockAppointments = [
    {
      id: 1,
      patientName: "Ramesh Kumar",
      dept: "Cardiology",
      date: "11-02-2026",
      time: "10:30 AM",
      status: "Pending",
    },
    {
      id: 2,
      patientName: "Sita Devi",
      dept: "Cardiology",
      date: "11-02-2026",
      time: "12:00 PM",
      status: "Confirmed",
    },
    {
      id: 3,
      patientName: "Arjun Rao",
      dept: "Dentistry",
      date: "12-02-2026",
      time: "09:15 AM",
      status: "Pending",
    },
  ];

  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("DD-MM-YYYY")
  );
  const [selectedDoctor, setSelectedDoctor] = useState("All");

  useEffect(() => {
    setAppointments(mockAppointments);
  }, []);

  // Doctor list
  const depts = useMemo(() => {
    const list = appointments.map((a) => a.dept);
    return ["All", ...new Set(list)];
  }, [appointments]);

  // Filter logic
  const filteredAppointments = appointments.filter((appt) => {
    const dateMatch = appt.date === selectedDate;
    const doctorMatch =
      selectedDoctor === "All" || appt.dept === selectedDoctor;
    return dateMatch && doctorMatch;
  });

  // Stats
  const today = dayjs().format("DD-MM-YYYY");
  const tomorrow = dayjs().add(1, "day").format("DD-MM-YYYY");

  const todayCount = appointments.filter(a => a.date === today).length;
  const tomorrowCount = appointments.filter(a => a.date === tomorrow).length;

  return (
    <>
      <Navbar />

      <div className={styles.page}>
        <div className={styles.content}>

          {/* Stats cards */}
          <div className={styles.statsGrid}>
            <div className={styles.cardStat}>
              Today<br /><b>{todayCount}</b>
            </div>
            <div className={styles.cardStat}>
              Tomorrow<br /><b>{tomorrowCount}</b>
            </div>
            <div className={styles.cardStat}>
              Total<br /><b>{appointments.length}</b>
            </div>
          </div>

          {/* Filters */}
          <div className={styles.filters}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={dayjs(selectedDate)}
                onChange={(newValue) =>
                  setSelectedDate(dayjs(newValue).format("DD-MM-YYYY"))
                }
              />
            </LocalizationProvider>

            <select
              className={styles.select}
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
            >
              {depts.map((doc) => (
                <option key={doc} value={doc}>
                  {doc}
                </option>
              ))}
            </select>
          </div>

          {/* Appointment List */}
          <div className={styles.apptlist}>
            <div className="grid gap-4">
              {filteredAppointments.map((appt) => (
                <motion.div
                  key={appt.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className={styles.card}>
                    <p className={styles.patient}>{appt.patientName}</p>
                    <p className={styles.meta}>
                      {appt.dept} • {appt.time}
                    </p>
                    {/* <span
                      className={`${styles.status} ${styles[appt.status]}`}
                    >
                      {appt.status}
                    </span> */}
                  </div>
                </motion.div>
              ))}

              {filteredAppointments.length === 0 && (
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
