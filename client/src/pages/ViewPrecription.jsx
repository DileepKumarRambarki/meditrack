import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ViewPrescription.module.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import  {useAuth} from "../utils/Authcontext"

export default function ViewPrescription() {
  const usermail = useAuth().userId;   // 🔥 get email from context
  const [prescriptions, setPrescriptions] = useState([]);
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  useEffect(() => {
    if (!usermail) return;

    const fetchPrescriptions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/getpresc/${usermail}`
        );
        console.log(response.data);
        // If you wrapped response with {success, data}
        // setPrescriptions(response.data.data);

        // If you return plain array
        setPrescriptions(response.data);
      } catch (err) {
        console.error("Error fetching prescriptions", err);
      }
    };

    fetchPrescriptions();
  }, [usermail]);

  const downloadPDF = async () => {
    const element = document.getElementById("prescriptionContent");
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save("prescription.pdf");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Your Prescription History</h2>

        {/* List */}
        <div className={styles.list}>
          {prescriptions.length === 0 && (
            <p className={styles.noData}>No prescriptions found</p>
          )}

          {prescriptions.map((item) => (
            <div
              key={item._id}
              className={styles.listItem}
              onClick={() => setSelectedPrescription(item)}
            >
              <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString("en-GB")}</p>
              <p><strong>Hospital:</strong> {item.hospital}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPrescription && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div id="prescriptionContent">
              <h3>Medical Prescription</h3>
              <p><strong>Hospital:</strong> {selectedPrescription.hospital}</p>
              <p><strong>Date:</strong> {new Date(selectedPrescription.date).toLocaleDateString("en-GB")}</p>

              <h4>Medicines</h4>
              <ul>
                {selectedPrescription.medicines.map((med, index) => (
                  <li key={index}>
                    {med.medicine} — {med.medtype}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.modalButtons}>
              <button onClick={downloadPDF} className={styles.downloadBtn}>
                Download PDF
              </button>
              <button
                onClick={() => setSelectedPrescription(null)}
                className={styles.closeBtn}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
