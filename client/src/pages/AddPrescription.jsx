import { useState } from "react";
import axios from "axios";
import styles from "./AddPrescription.module.css";
import { useAuth } from "../utils/Authcontext";
export default function AddPrescription() {
    const [hospitalId,setHospitalId]=useState(useAuth().userId);
  const [formData, setFormData] = useState({
    usermail: "",
    hospitalId: hospitalId,
    date: "",
    medicines: [{ medicine: "", medtype: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMedicineChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMedicines = [...formData.medicines];
    updatedMedicines[index][name] = value;

    setFormData({ ...formData, medicines: updatedMedicines });
  };

  const addMedicine = () => {
    setFormData({
      ...formData,
      medicines: [...formData.medicines, { medicine: "", medtype: "" }],
    });
  };

  const removeMedicine = (index) => {
    const updatedMedicines = formData.medicines.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, medicines: updatedMedicines });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/hospital/addpresc", formData);
      alert("Prescription Saved Successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Error saving prescription ❌");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Add Prescription</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="usermail"
            placeholder="Patient Email"
            value={formData.usermail}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="hospitalId"
            placeholder="Hospital ID"
            value={formData.hospitalId}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

          <h3>Medicines</h3>

          {formData.medicines.map((med, index) => (
            <div key={index} className={styles.medicineRow}>
              <input
                type="text"
                name="medicine"
                placeholder="Medicine Name"
                value={med.medicine}
                onChange={(e) => handleMedicineChange(index, e)}
                required
              />

              <input
                type="text"
                name="medtype"
                placeholder="Medicine Type (Tablet/Syrup)"
                value={med.medtype}
                onChange={(e) => handleMedicineChange(index, e)}
                required
              />

              {index > 0 && (
                <button
                  type="button"
                  className={styles.removeBtn}
                  onClick={() => removeMedicine(index)}
                >
                  ✕
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className={styles.addBtn}
            onClick={addMedicine}
          >
            + Add Medicine
          </button>

          <button type="submit" className={styles.submitBtn}>
            Save Prescription
          </button>
        </form>
      </div>
    </div>
  );
}
