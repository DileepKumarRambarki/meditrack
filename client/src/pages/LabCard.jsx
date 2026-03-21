import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./LabCard.module.css";
import LabReport from "./LabReport";
import  {useAuth} from "../utils/Authcontext"

export default function LabCard() {

  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  const usermail = useAuth().userId;

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/hospital/viewlabreport/${usermail}`);
      setReports(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Your Lab Reports</h2>

      {reports.map((report) => (
        <div
          key={report._id}
          className={styles.card}
          onClick={() => setSelectedReport(report)}
        >
          <p><b>Date:</b> {new Date(report.createdAt).toLocaleDateString("en-GB")}</p>
          <p><b>Hospital:</b> {report.hospital}</p>
        </div>
      ))}

      {/* Modal */}
      {selectedReport && (
        <div className={styles.modalOverlay} onClick={() => setSelectedReport(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>

            <button className={styles.closeBtn} onClick={() => setSelectedReport(null)}>
              ✕
            </button>

            <LabReport report={selectedReport} />

          </div>
        </div>
      )}
    </div>
  );
}