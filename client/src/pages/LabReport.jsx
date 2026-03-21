import { useRef } from "react";
import "./LabReport.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const LabReport = ({ report }) => {
  const reportRef = useRef(null);

  const downloadPdfDocument = () => {
    const input = reportRef.current;

    if (!input) return;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let y = 0;

      while (y < imgHeight) {
        pdf.addImage(imgData, "PNG", 0, -y, imgWidth, imgHeight);
        y += pageHeight;

        if (y < imgHeight) pdf.addPage();
      }

      pdf.save("LabReport.pdf");
    });
  };

  return (
    <div>
      <div id="report" ref={reportRef}>
        <div className="header">Meditrack Lab</div>
        <div className="sub-header">Accurate | Digital | Instant</div>

        <div className="report-container">

          {/* Patient Info */}
          <div className="patient-info">
            <p><span>Patient Email:</span> {report.usermail}</p>
            <p><span>Hospital:</span> {report.hospital}</p>
            <p>
              <span>Date:</span>{" "}
              {new Date(report.createdAt).toLocaleDateString("en-GB")}
            </p>
          </div>

          <h3>{report.reportTitle}</h3>

          {/* Table */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>Result</th>
                  <th>Normal Range</th>
                </tr>
              </thead>

              <tbody>
                {report.tests.map((t, index) => (
                  <tr key={index}>
                    <td>{t.testName}</td>
                    <td>{t.value}</td>
                    <td>{t.normalRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4>Comments:</h4>
          <p>{report.comments}</p>

          <div className="footer">
            <p>Generated on: {new Date().toLocaleString()}</p>
          </div>

        </div>
      </div>
      <div style={{ textAlign: "right", marginBottom: "10px" }}>
        <button className="download-btn" onClick={downloadPdfDocument}>
          ⬇ Download PDF
        </button>
      </div>

    </div>
  );
};

export default LabReport;