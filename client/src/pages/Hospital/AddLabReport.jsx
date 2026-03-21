import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../utils/Authcontext";
import styles from "./AddLabReport.module.css"; // reuse same styles

export default function AddLabReport() {

  const { userId } = useAuth(); // hospital admin id

  const [formData, setFormData] = useState({
    usermail: "",
    hospitalId: userId,
    reportTitle: "",
    date: "",
    tests: [{ testName: "", value: "", normalRange: "" }],
    comments: ""
  });

  // Handle normal input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle test row change
  const handleTestChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTests = [...formData.tests];
    updatedTests[index][name] = value;

    setFormData({ ...formData, tests: updatedTests });
  };

  // Add new test row
  const addTest = () => {
    setFormData({
      ...formData,
      tests: [...formData.tests, { testName: "", value: "", normalRange: "" }]
    });
  };

  // Remove test row
  const removeTest = (index) => {
    const updatedTests = formData.tests.filter((_, i) => i !== index);
    setFormData({ ...formData, tests: updatedTests });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("http://localhost:3000/hospital/addlabreport", formData);
      alert("Lab Report Saved Successfully ✅");

      // reset form
      setFormData({
        usermail: "",
        hospitalId: userId,
        reportTitle: "",
        date: "",
        tests: [{ testName: "", value: "", normalRange: "" }],
        comments: ""
      });

    } catch (err) {
      console.error(err);
      alert("Error saving lab report ❌");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Add Lab Report</h2>

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
            value={formData.hospitalId}
            readOnly
          />

          <input
            type="text"
            name="reportTitle"
            placeholder="Report Title (Blood Test, CBC...)"
            value={formData.reportTitle}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

          <h3>Tests</h3>

          {formData.tests.map((test, index) => (
            <div key={index} className={styles.medicineRow}>

              <input
                type="text"
                name="testName"
                placeholder="Test Name (Hemoglobin)"
                value={test.testName}
                onChange={(e) => handleTestChange(index, e)}
                required
              />

              <input
                type="text"
                name="value"
                placeholder="Value (13.5 g/dL)"
                value={test.value}
                onChange={(e) => handleTestChange(index, e)}
                required
              />

              <input
                type="text"
                name="normalRange"
                placeholder="Normal Range (12-16 g/dL)"
                value={test.normalRange}
                onChange={(e) => handleTestChange(index, e)}
                required
              />

              {index > 0 && (
                <button
                  type="button"
                  className={styles.removeBtn}
                  onClick={() => removeTest(index)}
                >
                  ✕
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className={styles.addBtn}
            onClick={addTest}
          >
            + Add Test
          </button>

          <textarea
            name="comments"
            placeholder="Doctor Comments"
            value={formData.comments}
            onChange={handleChange}
          />

          <button type="submit" className={styles.submitBtn}>
            Save Lab Report
          </button>

        </form>
      </div>
    </div>
  );
}