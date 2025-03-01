import { useEffect, useRef, useState } from "react";
import "./LabReport.css"
import {jsPDF} from "jspdf";
import html2canvas from "html2canvas";
const LabReport=(props)=>{
    const [download,setDownload]=useState(props.download);
    console.log("report download",props.download);
    const report=useRef(null);
    const downloadPdfDocument = (report) => {
        const input = report.current;
    
        if (!input) {
          console.error("⚠️ Report element not found!");
          return;
        }
    
        html2canvas(input, { scale: 2 }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
    
          const imgWidth = 210; // A4 width in mm
          const pageHeight = 297; // A4 height in mm
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
          let y = 0; // Start height position
    
          while (y < imgHeight) {
            pdf.addImage(imgData, "PNG", 0, -y, imgWidth, imgHeight);
            y += pageHeight;
    
            if (y < imgHeight) {
              pdf.addPage(); // Add a new page if there's more content
            }
          }
    
          pdf.save("LabReport.pdf");
        }).catch((error) => console.error("PDF generation failed:", error));
      };
      useEffect(()=>{
        if(props.download){
            downloadPdfDocument(report);
            setDownload(false);
        }
    },[props.download]);
    return(
        <div id="report" ref={report}>
                <div className="header">Dr Samaram Lab</div>
    <div className="sub-header">Accurate | Caring | Instant</div>
    
    <div className="report-container">
        
        <div className="patient-info">
            <p><span>Patient Name:</span>Uppena Aashi</p>
            <p><span>Age:</span> 27 Years &nbsp; | &nbsp; <span>Sex:</span> Male &nbsp; | &nbsp; <span>UHID:</span> 556</p>
        </div>

        <div className="sample-info">
            <p><span>Sample Collected At:</span> some jatara,Uppada beach,Kakinada</p>
            <p><span>Sample Collected By:</span> Mr. Rayana</p>
            <p><span>Referred By:</span> Dr. Buchibabu</p>
            <p><span>Sample Type:</span> Stool (5g) &nbsp; | &nbsp; <span>TAT:</span> 4 hrs (Normal: 4-8 hrs)</p>
        </div>

        <h3>Complete Blood Count</h3>

        <div className="table-container">
            <table>
                <tr>
                    <th>Test name</th>
                    <th>Result</th>
                    <th>Reference Value</th>
                </tr>
                <tr>
                    <td>Cryptosporidium spp</td>
                    <td className="result-green">Not Detected</td>
                    <td>Negative</td>
                </tr>
                <tr>
                    <td>OVA, Cryptosporidium spp</td>
                    <td className="result-green">Not Detected</td>
                    <td>Negative</td>
                </tr>
                <tr>
                    <td>LARVA, Cryptosporidium spp</td>
                    <td className="result-green">Not Detected</td>
                    <td>Negative</td>
                </tr>
                <tr>
                    <td>OTHER, Cryptosporidium spp</td>
                    <td className="result-green">Not Detected</td>
                    <td>Negative</td>
                </tr>
                <tr>
                    <td>Cyclospora spp</td>
                    <td className="result-green">Not Detected</td>
                    <td>Negative</td>
                </tr>
                <tr>
                    <td>OVA, Cyclospora spp</td>
                    <td className="result-green">Not Detected</td>
                    <td>Negative</td>
                </tr>
                <tr>
                    <td>LARVA, Cyclospora spp</td>
                    <td className="result-green">Not Detected</td>
                    <td>Negative</td>
                </tr>
                <tr>
                    <td>OTHER, Cyclospora spp</td>
                    <td className="result-green">Not Detected</td>
                    <td>Negative</td>
                </tr>
                <tr>
                    <td>Isospora spp</td>
                    <td className="result-green">Not Detected</td>
                    <td>Negative</td>
                </tr>
                <tr>
                    <td>Microsporidia spp</td>
                    <td className="result-green">Not Detected</td>
                    <td>Negative</td>
                </tr>
                <tr>
                    <td>Strongyloides stercoralis larvae</td>
                    <td className="result-green">Not Detected</td>
                    <td>Negative</td>
                </tr>
            </table>
        </div>

        <h4>Note:</h4>
        <p>This test is a screening test done microscopically to detect commonly occurring opportunistic enteric parasitic infections in immunocompromised patients. Routine enteric parasites found in stool are not in the scope of this test.</p>

        <h4>Comments:</h4>
        <p>Parasites such as Cryptosporidium spp., Cyclospora spp., Cystoisospora spp., Microsporidia and Strongyloides stercoralis may cause severe diarrhea among immunocompromised patients. Opportunistic enteric parasitic infections are encountered in 30-60% of HIV seropositive patients in developing countries. The outcome of infection by enteric protozoan parasites is dependent on absolute CD4+ cell counts, with lower counts being associated with more severe disease, more atypical disease, and a greater risk of disseminated disease.</p>

        <div className="signatures">
            <div className="signature">
                <p>Medical Lab Technician</p>
                <p>(DMLT, BMLT)</p>
            </div>
            <div className="signature">
                <p>Dr. Payal Shah</p>
                <p>(MD, Pathologist)</p>
            </div>
            <div className="signature">
                <p>Dr. Vimal Shah</p>
                <p>(MD, Pathologist)</p>
            </div>
        </div>

        <div className="footer">
            <p>Generated on: 02 Dec, 20XX | 05:00 PM</p>
            <p>Sample Collection: 0123456789</p>
        </div>

    </div>


        </div>
    )
}
export default LabReport