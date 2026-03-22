import React, { useState, useEffect } from "react";
import styles from "./HospitalTimetable.module.css";
import { useAuth } from "../../utils/Authcontext";
import axios from "axios";

export default function HospitalTimetable() {

  const { userId } = useAuth();
  const [hospitalId] = useState(userId);

  const departments = {
    Dermatology: "10:00AM-12:00PM",
    "General Medicine": "11:00AM-01:00PM",
    Gastroenterology: "12:00PM-02:00PM",
    Hepatology: "01:00PM-03:00PM",
    Orthopedics: "02:00PM-04:00PM",
    Pulmonology: "03:00PM-05:00PM",
    Cardiology: "04:00PM-06:00PM",
    Neurology: "05:00PM-07:00PM",
    Pediatrics: "06:00PM-08:00PM",
    ENT: "07:00PM-09:00PM",
    Gynecology: "08:00PM-10:00PM",
    Nephrology: "08:00PM-10:00PM",
    Dentist: "08:00PM-10:00PM",
    Radiology: "08:00PM-10:00PM",
    Ophtamology: "08:00PM-10:00PM",
    Tricology: "08:00PM-10:00PM",
  };

  const timeslots = Object.values(departments);

  const [tableData, setTableData] = useState({});

  // ✅ FETCH EXISTING TIMETABLE
  useEffect(() => {
    fetchTimetable();
  }, []);

  const fetchTimetable = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/hospital/gettimetable/${hospitalId}`
      );

      const data = res.data;

      // If backend returns { timetable: {...} }
      const timetable = data.timetable || data;

      setTableData(timetable);

    } catch (err) {
      console.log("Fetch Error:", err);
    }
  };

  // ✅ HANDLE CHANGE
  const handleChange = (dept, field, value) => {
    setTableData((prev) => ({
      ...prev,
      [dept]: {
        ...prev[dept],
        [field]: value
      }
    }));
  };

  // ✅ SUBMIT UPDATED DATA
  const handleSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:3000/hospital/updatetimetable",
        {
          hospitalId,
          timetable: tableData
        }
      );

      alert("Timetable updated successfully");

    } catch (err) {
      console.log("API ERROR:", err);
      alert("Failed to update timetable");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Hospital Department Timetable</h2>

      <div className={styles.table}>
        <div className={styles.header}>
          <div>Department</div>
          <div>Doctor Name</div>
          <div>Time Slot</div>
          <div>Max Patients</div>
        </div>

        {Object.keys(departments).map((dept, index) => {

          const current = tableData[dept] || {};

          return (
            <div className={styles.row} key={index}>

              <div className={styles.dept}>{dept}</div>

              {/* Doctor */}
              <input
                type="text"
                placeholder="Enter Doctor Name"
                value={current.doctor || ""}
                onChange={(e) =>
                  handleChange(dept, "doctor", e.target.value)
                }
              />

              {/* Time */}
              <select
                value={current.time || departments[dept]}
                onChange={(e) =>
                  handleChange(dept, "time", e.target.value)
                }
              >
                <option value={departments[dept]}>
                  {departments[dept]}
                </option>

                {timeslots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>

              {/* Patient Count */}
              <input
                type="number"
                value={current.patientCount ?? ""}
                onChange={(e) =>
                    handleChange(
                    dept,
                    "patientCount",
                    e.target.value === "" ? "" : Number(e.target.value)
                    )
                }
                />

            </div>
          );
        })}
      </div>

      <button className={styles.updateBtn} onClick={handleSubmit}>
        Update
      </button>
    </div>
  );
}